/* eslint-disable radix */
<template>
<div class="page page--dark-theme lesson-reports">
    <header class='header'>
      <router-link
        class='go-back light'
        :to="{name: 'ege'}"
      >
      Back to EGE page
      </router-link>
    </header>
  <main class='main lesson-reports__main'>
      <h1 class='primary-title heading-white centered lesson-reports__title'>
        Отчеты по проведенным занятиям
      </h1>
      <div class='lesson-reports__sliders'>
        <HorizontalSlider
          :slides="years"
          status='primary'
          dateType='year'
        />
        <HorizontalSlider
          :slides="months"
          @slide-chosen="updateMonthSlide"
        />
      </div>
    <div class='plan-info'>
      <div
        class='plan-info__line'
        v-for="item in planMarkUp"
        :key="item.title"
      >
        <b
          class='plan-info__title'
          :class="item.class"
        >
          {{ item.title }}
        </b>
        <span
          v-if="item.showDate"
          class='plan-info__date'
        >
          {{ this[item.dateField] }}
        </span>
        <span v-if="item.showDate"> : </span>
        <span class='plan-info__number'>{{ this[item.hoursField] }}</span>
        <span class='plan-info__measurement'>часов</span>
        <span class='plan-info__number'>{{ this[item.minutesField] }}</span>
        <span class='plan-info__measurement'>минут</span>
        <img
          v-if="item.editable"
          src='@/assets/edit.png'
          class='icon edit-icon edit-done'
          @click="item.editMethod"
        >
      </div>
      <button
        class='btn'
        @click="showHistory"
      >
        Показать историю изменений
      </button>
    </div>
    <EditInfo
      v-if="showEditInfo"
      :editTypeTitle="editTypeTitle"
      :editTypeClass="editTypeClass"
      @close-edit="closeEdit"
      @update-edit-info="updateDoneMissed"
    />
    <HistoryInfo
      v-if="showHistoryInfo"
      @close-history="closeHistory"
    />
    <EditPlanned
      v-if="showEditPlanBlock"
      :month="months[this.currentMonth]"
      @close-edit-plan="closeEditPlan"
      @save-edit-plan="saveEditPlannedAmount"
    />
  </main>
  <footer class='footer'></footer>
</div>
</template>

<script>
// ! чтобы получить правильный долг,
// ! надо указать в прошлом месяце проведенные занятия и обновить страницу на том же прошлом месяце
// done February 08 - 2.5 hours
// todo:
// todo 1) обнулять в 12 ночи историю изменений,
// todo 2) fix bug - done при смене месяца плюсуется к предыдущему
// todo 3) выводить в таблице истории данные за выбранный месяц,
// todo   переопределить там  формат даты и времени
// todo 4) при прошедшем месяце в ручном режиме слайдера показывать последний день месяца,
// todo    а не текущую дату - работает с запозданием, показывает дату предыдущего слайда
// todo 5) добавлять долг только при окончании календарного месяца
// todo 7) пересчитывать долг автоматически при изменении запланированного и переключении слайда
// todo 8) в деплое долг не обновляется после изменений проведенных занятий
import HorizontalSlider from '@/components/HorizontalSlider.vue';
import EditInfo from '@/components/LessonEditInfo.vue';
import HistoryInfo from '@/components/HistoryUpdateInfo.vue';
import EditPlanned from '@/components/LessonEditPlanned.vue';
import saveInfo from '@/helpers/saveInfo';
import getSavedInfo from '@/helpers/getSavedInfo';
import getDaysInMonth from '@/helpers/getDaysInMonth';

export default {
  name: 'LessonReports',
  components: {
    HorizontalSlider,
    EditInfo,
    HistoryInfo,
    EditPlanned,
  },
  data() {
    return {
      planMarkUp: [
        {
          title: 'Запланировано:',
          class: 'planned',
          hoursField: 'plannedHours',
          minutesField: 'plannedMinutes',
          editable: true,
          editMethod: this.showEditPlan,
        },
        {
          title: 'Запланировано c учетом долга:',
          class: 'planned',
          hoursField: 'withDebtPlannedHours',
          minutesField: 'withDebtPlannedMinutes',
          editable: false,
        },
        {
          title: 'Проведено на ',
          class: 'done',
          showDate: true,
          dateField: 'currentDay',
          hoursField: 'doneHours',
          minutesField: 'doneMinutes',
          editable: true,
          editMethod: () => this.showEdit('done'),
        },
        {
          title: 'Пропущено на ',
          class: 'missed',
          showDate: true,
          dateField: 'currentDay',
          hoursField: 'missedHours',
          minutesField: 'missedMinutes',
          editable: true,
          editMethod: () => this.showEdit('missed'),
        },
        {
          title: 'Осталось провести: ',
          hoursField: 'restHours',
          minutesField: 'restMinutes',
        },
        {
          title: 'Долг: ',
          class: 'debt',
          hoursField: 'debtHours',
          minutesField: 'debtMinutes',
        },
      ],
      months: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      years: ['2022'],
      // * plannedAmount будет храниться в минутах и преобразовываться в часы для вывода
      planData: {},
      // * если в слайдере выбрали что-то
      sliderHandMode: false,
      handModeYear: null,
      handModeMonth: null,
      currMonthDays: null,
      handModeLastDay: null,
      showEditInfo: false,
      editTypeClass: '',
      editTypeTitle: '',
      showHistoryInfo: false,
      showEditPlanBlock: false,
      doneInfoArray: [],
      missedInfoArray: [],
      doneInfo: {
        date: '',
        time: '',
        comment: '',
      },
      missedInfo: {
        date: '',
        time: '',
        comment: '',
      },
    };
  },
  computed: {
    // * определяет отношение календарного месяца к выбранному в слайдере
    calendarMonthPassed() {
      return this.handModeMonth < new Date().getMonth();
    },
    showPlannedWithDebt() {
      return this.currentMonth > 0 && this.currentPlan.withDebtPlannedAmount;
    },
    isDayEnd() {
      // * для вычисления долга
      // * this.sliderHandMode - маркер ручного режима слайдера
      return this.sliderHandMode ? true : new Date().getHours() === 24;
    },
    lastDayMonth() {
      return this.handModeLastDay || new Date().getDate();
    },
    currentDay() {
      return this.calendarMonthPassed ? this.sliderLastDate : new Date().toLocaleDateString('ru');
    },
    currentYear() {
      return this.handModeYear || new Date().getFullYear();
    },
    currentMonth() {
      return this.handModeMonth !== null ? this.handModeMonth : new Date().getMonth();
    },
    currentPlan() {
      return this.planData[this.currentYear][this.currentMonth];
    },
    plannedHours() {
      // * преобразуем хранимые минуты в часы
      return Math.floor(this.currentPlan.plannedAmount / 60);
    },
    plannedMinutes() {
      // * считаем удобочитаемые минуты от общего количества
      return this.currentPlan.plannedAmount - this.plannedHours * 60;
    },
    withDebtPlannedHours() {
      // * преобразуем хранимые минуты в часы
      return Math.floor(this.currentPlan.withDebtPlannedAmount / 60);
    },
    withDebtPlannedMinutes() {
      // * считаем удобочитаемые минуты от общего количества
      return this.currentPlan.withDebtPlannedAmount - this.withDebtPlannedHours * 60;
    },
    doneHours() {
      // * преобразуем хранимые минуты в часы
      return Math.floor(this.currentPlan.done / 60);
    },
    doneMinutes() {
      // * считаем удобочитаемые минуты от общего количества
      return this.currentPlan.done - this.doneHours * 60;
    },
    missedHours() {
      // * преобразуем хранимые минуты в часы
      return Math.floor(this.currentPlan.missed / 60);
    },
    missedMinutes() {
      // * считаем удобочитаемые минуты от общего количества
      return this.currentPlan.missed - this.missedHours * 60;
    },
    restHours() {
      return Math.floor(this.restAmount / 60);
    },
    restMinutes() {
      return this.restAmount - this.restHours * 60;
    },
    restAmount() {
      // * остаток в минутах
      // * в январе считаем остаток из обычного запланированного,
      // * в остальных месяцах учитываем план с долгом
      return this.currentMonth > 0 && this.currentPlan.withDebtPlannedAmount
        ? this.currentPlan.withDebtPlannedAmount - this.currentPlan.done
        : this.currentPlan.plannedAmount - this.currentPlan.done;
    },
    debtHours() {
      return Math.floor(this.currentPlan.debt / 60);
    },
    debtMinutes() {
      return this.currentPlan.debt - this.debtHours * 60;
    },
    prevMonthPlan() {
      let prevMonth;
      if (this.currentMonth === 0) {
        prevMonth = 11;
      } else {
        prevMonth = this.currentMonth - 1;
      }

      return this.planData[this.currentYear][prevMonth];
    },
  },
  created() {
    this.updateSavedData();
    if (this.planData[this.currentYear] === undefined) {
      this.fillPlan();
    }
    const sliderHandModeInfo = getSavedInfo('h_slider__month') || {};
    // * handModeMonth устанавливается в этой функции
    this.updateMonthSlide(sliderHandModeInfo);
    console.log('this.currentPlan: ', this.currentPlan);
  },
  methods: {
    showEdit(type) {
      this.showEditInfo = true;
      this.editTypeClass = type;
      if (type === 'done') {
        this.editTypeTitle = 'Проведенное занятие';
      } else {
        this.editTypeTitle = 'Пропущенное занятие';
      }
    },
    closeEdit() {
      this.showEditInfo = false;
    },
    showHistory() {
      this.showHistoryInfo = true;
    },
    closeHistory() {
      this.showHistoryInfo = false;
    },
    showEditPlan() {
      this.showEditPlanBlock = true;
    },
    closeEditPlan() {
      this.showEditPlanBlock = false;
    },
    // * первичное заполнение плана на год дефолтными значениями
    fillPlan() {
      const monthBase = {
        plannedAmount: 8 * 60,
        withDebtPlannedAmount: 0,
        done: 0,
        missed: 0,
        debt: 0,
      };
      this.planData[this.currentYear] = {};
      this.months.forEach((month, index) => {
        this.planData[this.currentYear][index] = monthBase;
      });
      saveInfo('lesson-reports__planData', this.planData);
    },
    saveEditPlannedAmount(plannedMinutes) {
      // * сохранение запланированных часов и минут на месяц
      this.currentPlan.plannedAmount = plannedMinutes;
      saveInfo('lesson-reports__planData', this.planData);
      this.calculateDebt();
    },
    updateDoneMissed(editInfoType) {
      let infoObject = {};
      if (editInfoType === 'done') {
        this.doneInfo = getSavedInfo('lesson-edit-info--done');
        infoObject = this.doneInfo;
      } else {
        this.missedInfo = getSavedInfo('lesson-edit-info--missed');
        infoObject = this.missedInfo;
      }
      const editDate = new Date(infoObject.date);
      const editMonth = editDate.getMonth();
      const editYear = editDate.getFullYear();
      // * обновляем план исходя из указанной при редактировании даты
      this.planData[editYear][editMonth][editInfoType] += infoObject.time;
      saveInfo('lesson-reports__planData', this.planData);
      this.calculateDebt();
      console.log('currentPlan: ', this.currentPlan);
      console.log('planData: ', this.planData);
    },
    updateMonthSlide(info) {
      if (info !== {}) {
        this.sliderHandMode = true;
      }
      // * число - номер последнего дня
      this.handModeLastDay = new Date(this.currentYear, this.currentMonth, this.currMonthDays)
        .getDate();
      if (info.sliderType === 'month') {
        this.handModeMonth = info.index;
      } else {
        this.handModeYear = this.years[info.index];
      }
      // * дата - последний день выбранного в слайдере месяца
      this.sliderLastDate = new Date(this.currentYear, this.currentMonth, this.currMonthDays).toLocaleDateString('ru');
      // * чтобы computed успели обновиться
      this.$nextTick(() => this.calculateDebt());
    },
    updateSavedData() {
      const savedPlan = getSavedInfo('lesson-reports__planData');
      if (savedPlan) {
        this.planData = savedPlan;
      }
    },
    calculateDebt() {
      // * устанавливаем долг в последний день месяца, 24 часа и сохраняем в l
      this.currMonthDays = getDaysInMonth(this.currentMonth, this.currentYear);
      if (this.lastDayMonth === this.currMonthDays
      && this.isDayEnd
      && this.restAmount) {
        this.currentPlan.debt = this.restAmount;
        saveInfo('lesson-reports__planData', this.planData);
      }

      if (this.currentMonth > 0 && this.prevMonthPlan.debt) {
        this.currentPlan.debt = this.prevMonthPlan.debt;
        this.currentPlan.withDebtPlannedAmount = this.currentPlan.plannedAmount
          + this.currentPlan.debt;
      }
    },
  },
};
</script>
