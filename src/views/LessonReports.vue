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
      :month="currentMonth"
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
// done February 08 - 2.5 hours
// * подсчет долга
// * учитываются  2 варианта - долг считается по окончанию календарного месяца calculateCalendarDebt
// * и для прошедших месяцев, если в них изменили информацию updateDebt
// * при created никакой долг автоматически не считается,
// * он обновится, только если отредактируем нужный месяц
// * restAmount, plannedWithDebt считаются вручную, не в computed
// todo:
// todo 1) обнулять в 12 ночи историю изменений,
// todo 2) fix bug - done при смене месяца плюсуется к предыдущему
// todo 3) при редактировании прошедших месяце предвыбирать соответствующую дату редактирования
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
      showEditInfo: false,
      editTypeClass: '',
      editTypeTitle: '',
      showHistoryInfo: false,
      showEditPlanBlock: false,
      doneInfoArray: [],
      missedInfoArray: [],
      doneInfo: {
        date: '',
        hours: '',
        minutes: '',
        time: '',
        comment: '',
      },
      missedInfo: {
        date: '',
        hours: '',
        minutes: '',
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
    calendarMonthNotStarted() {
      return this.handModeMonth > new Date().getMonth();
    },
    isSliderCurrentCalenderMonth() {
      return this.handModeMonth === new Date().getMonth();
    },
    showPlannedWithDebt() {
      return this.currentMonth > 0 && this.currentPlan.withDebtPlannedAmount;
    },
    isDayEnd() {
      // * конец календарного дня
      return new Date().getHours() === 24;
    },
    // * учитывается только календарная дата, не выбранная в слайдере
    islastMonthDay() {
      return getDaysInMonth(new Date().getMonth() + 1,
        new Date().getFullYear()) === new Date().getDate();
    },
    currentDay() {
      return this.calendarMonthPassed ? this.currentPlan.lastMonthDay : new Date().toLocaleDateString('ru');
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
    calendarCurrentYear() {
      return new Date().getFullYear();
    },
    calendarCurrentMonth() {
      return new Date().getMonth();
    },
    currentCalendarPlan() {
      return this.planData[this.calendarCurrentYear][this.calendarCurrentMonth];
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
      return Math.floor(this.currentPlan.restAmount / 60);
    },
    restMinutes() {
      return this.currentPlan.restAmount - this.restHours * 60;
    },
    calendarRestAmount() {
      // * остаток в минутах
      // * в январе считаем остаток из обычного запланированного,
      // * в остальных месяцах учитываем план с долгом
      return this.calendarCurrentMonth > 0 && this.currentCalendarPlan.withDebtPlannedAmount
        ? this.currentCalendarPlan.withDebtPlannedAmount - this.currentCalendarPlan.done
        : this.currentCalendarPlan.plannedAmount - this.currentCalendarPlan.done;
    },
    debtHours() {
      return Math.floor(this.currentPlan.debt / 60);
    },
    debtMinutes() {
      return this.currentPlan.debt - this.debtHours * 60;
    },
    calendarPrevMonthPlan() {
      let prevMonth;
      if (this.calendarCurrentMonth === 0) {
        prevMonth = 11;
      } else {
        prevMonth = this.calendarCurrentMonth - 1;
      }

      return this.planData[this.calendarCurrentYear][prevMonth];
    },
    // * по календарю
    calendarNextMonthPlan() {
      let nextMonth;

      if (this.calendarCurrentMonth === 11) {
        nextMonth = null;
      } else {
        nextMonth = this.calendarCurrentMonth + 1;
      }

      return this.planData[this.calendarCurrentYear][nextMonth];
    },
  },
  created() {
    this.updateSavedData();
    if (this.planData[this.currentYear] === undefined) {
      this.fillPlan();
    }
    this.calculateCalendarDebt();
    const sliderHandModeInfo = getSavedInfo('h_slider__month');
    if (sliderHandModeInfo) {
      // * sliderHandMode устанавливается в этой функции
      this.updateMonthSlide(sliderHandModeInfo);
    }

    console.log('in created this.currentPlan: ', this.currentPlan);
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
      this.planData[this.currentYear] = {};
      this.months.forEach((month, index) => {
        const daysInMonth = getDaysInMonth(index + 1, this.currentYear);
        const lastMonthDay = new Date(this.currentYear, index, daysInMonth).toLocaleDateString('ru');
        const monthBase = {
          plannedAmount: 8 * 60,
          withDebtPlannedAmount: 0,
          done: 0,
          missed: 0,
          restAmount: 8 * 60,
          debt: 0,
          lastMonthDay,
          daysInMonth,
        };
        this.planData[this.currentYear][index] = monthBase;
      });
      saveInfo('lesson-reports__planData', this.planData);
    },
    saveEditPlannedAmount(plannedMinutes) {
      console.log('in saveEditPlannedAmount this.currentPlan', this.currentPlan);
      // * сохранение запланированных часов и минут на месяц
      this.currentPlan.plannedAmount = plannedMinutes;
      console.log('this.currentPlan.plannedAmount: ', this.currentPlan.plannedAmount);
      this.calculateRestAmount(this.currentPlan);
      console.log('after calculateRestAmount planData', this.planData);
      saveInfo('lesson-reports__planData', this.planData);
      console.log('after saveInfo planData', this.planData);
      this.updateDebt(this.currentMonth);
      console.log('after updateDebt planData', this.planData);
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
      const plan = this.planData[editYear][editMonth];
      plan[editInfoType] += infoObject.time;
      this.calculateRestAmount(plan, editMonth);

      saveInfo('lesson-reports__planData', this.planData);
      this.updateDebt(editMonth);
      // console.log('in updateDoneMissed currentPlan: ', this.currentPlan);
      // console.log('in updateDoneMissed planData: ', this.planData);
    },
    updateMonthSlide(info) {
      if (info !== {}) {
        this.sliderHandMode = true;
      }

      if (info.sliderType === 'month') {
        this.handModeMonth = info.index;
      } else {
        this.handModeYear = this.years[info.index];
      }

      // * чтобы computed успели обновиться
      // this.$nextTick(() => this.updateDebt(this.currentMonth));
    },
    updateSavedData() {
      const savedPlan = getSavedInfo('lesson-reports__planData');
      if (savedPlan) {
        this.planData = savedPlan;
      }
    },
    updatePlannedWithDebt(plan, month) {
      if (month === 0) {
        plan.withDebtPlannedAmount = plan.plannedAmount;
      } else {
        plan.withDebtPlannedAmount = plan.plannedAmount + (plan.debt || 0);
      }
    },
    calculateRestAmount(plan, month = this.currentMonth) {
      if (month > 0) {
        plan.restAmount = plan.withDebtPlannedAmount - plan.done;
      } else {
        // * для января нет запланированного с долгом
        plan.restAmount = plan.plannedAmount - plan.done;
      }
    },
    // * для календарного обновления долга
    calculateCalendarDebt() {
      // * устанавливаем долг в последний день месяца, 24 часа и сохраняем в l
      // * конец календарного месяца
      if (this.islastMonthDay
      && this.isDayEnd
      && this.restAmount) {
        // console.log('in calculate calendar debt');
        this.currentCalendarPlan.debt = this.calendarRestAmount;
        if (this.calendarNextMonthPlan) {
          this.calendarNextMonthPlan.debt = this.currentCalendarPlan.debt;
          this.calendarNextMonthPlan
            .withDebtPlannedAmount = this.calendarNextMonthPlan.plannedAmount
              + this.currentCalendarPlan.debt;
        }
        saveInfo('lesson-reports__planData', this.planData);
      }

      // this.months.forEach((month, index) => {
      //   const plan = this.planData[this.currentYear][index];
      //   this.calculateRestAmount(plan, index);
      //   if (index <= this.calendarCurrentMonth && plan.restAmount) {
      //     plan.debt = plan.restAmount;
      //   }
      //   this.updatePlannedWithDebt(plan, index);
      //   this.calculateRestAmount(plan, index);
      //   if (index <= this.calendarCurrentMonth && plan.restAmount) {
      //     plan.debt = plan.restAmount;
      //   }
      // });
    },
    // * вызывается при редактировании данных плана
    updateDebt(updateMonth) {
      // console.log('updateMonth: ', updateMonth);
      // console.log('this.calendarCurrentMonth): ', this.calendarCurrentMonth);
      if (updateMonth === this.calendarCurrentMonth) {
        return;
      }
      // * обновили данные за прошедший месяц
      const changedMonth = this.planData[this.currentYear][updateMonth];
      // console.log('changedMonth: ', changedMonth);
      this.months.forEach((month, index) => {
        const plan = this.planData[this.currentYear][index];
        if (index <= this.calendarCurrentMonth) {
          // * не обновлять долг у тех месяцев, где его не было
          if (index < updateMonth) {
            return;
          }
          // console.log('in calculate slider debt');
          // console.log('changedMonth.restAmount: ', changedMonth.restAmount / 60);a
          plan.debt = changedMonth.restAmount;
        }

        this.updatePlannedWithDebt(plan, index);

        this.calculateRestAmount(plan, index);
        saveInfo('lesson-reports__planData', this.planData);
      });

      // обновить долг для следующего месяца с помощью слайдерного nextMonthPlan
    },
  },
};
</script>
