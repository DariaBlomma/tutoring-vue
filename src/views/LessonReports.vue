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
          @slide-chosen="updateShownPlan"
        />
      </div>
    <div class='plan-info'>
      <div class='plan-info__line'>
        <b class='plan-info__title planned'>
          Запланировано:
        </b>
        <span class='span-info__number'>{{ currentPlan.plannedAmount + ' ' }}</span>
        <span class='span-info__measurement'>часов</span>
      </div>
      <div class='plan-info__line'>
        <b class='plan-info__title done'>
          Проведено на
        </b>
        <span class='plan-info__date'>{{ currentDay }}</span>
        <span> : </span>
        <span class='span-info__number'>{{ currentPlan.done + ' ' }}</span>
        <span class='span-info__measurement'>часов</span>
        <img
          src='@/assets/edit.png'
          class='icon edit-icon edit-done'
          @click="showEdit('done')"
        >
      </div>
      <div class='plan-info__line'>
        <b class='plan-info__title missed'>
          Пропущено на
        </b>
        <span class='plan-info__date'>{{ currentDay }}</span>
        <span> : </span>
        <span class='span-info__number'>{{ currentPlan.missed + ' ' }}</span>
        <span class='span-info__measurement'>часов</span>
        <img
          src='@/assets/edit.png'
          class='icon edit-icon edit-missed'
          @click="showEdit('missed')"
        >
      </div>
      <div class='plan-info__line'>
        <b class='plan-info__title'>
          Осталось провести:
        </b>
        <span class='span-info__number'>{{ restAmount + ' ' }}</span>
        <span class='span-info__measurement'>часов</span>
      </div>
      <div class='plan-info__line'>
        <b class='plan-info__title debt'>
          Долг:
        </b>
        <span class='span-info__number'>{{ currentPlan.debt + ' ' }}</span>
        <span class='span-info__measurement'>часов</span>
      </div>
      <button
        class='btn'
        @click="showHistory"
      >Показать историю изменений
      </button>
    </div>
    <EditInfo
      v-if="showEditInfo"
      :editTypeTitle="editTypeTitle"
      :editTypeClass="editTypeClass"
      @close-edit="closeEdit"
      @update-edit-info="updateCurrentPlan"
    />
    <HistoryInfo
      v-if="showHistoryInfo"
      @close-history="closeHistory"
    />
  </main>
  <footer class='footer'></footer>
</div>
</template>

<script>
// todo:
// todo 1) обнулять в 12 ночи историю изменений,
// todo 2) fix bug - done при смене месяца плюсуется к предыдущему
// todo 3) заполнить план на год автоматически, а для отдельных месяцев изменять вручную
import HorizontalSlider from '@/components/HorizontalSlider.vue';
import EditInfo from '@/components/LessonEditInfo.vue';
import HistoryInfo from '@/components/HistoryUpdateInfo.vue';
import saveInfo from '@/helpers/saveInfo';
import getSavedInfo from '@/helpers/getSavedInfo';
import getDaysInMonth from '@/helpers/getDaysInMonth';

export default {
  name: 'LessonReports',
  components: {
    HorizontalSlider,
    EditInfo,
    HistoryInfo,
  },
  data() {
    return {
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
      planData: {
        2022: {
          0: {
            plannedAmount: 6,
            done: 6,
            missed: 1,
            debt: 0,
          },
          1: {
            plannedAmount: 8,
            done: 2,
            missed: 0,
            debt: 0,
          },
        },
      },
      // * если в слайдере выбрали что-то
      handModeYear: null,
      handModeMonth: null,
      currMonthDays: null,
      showEditInfo: false,
      editTypeClass: '',
      editTypeTitle: '',
      showHistoryInfo: false,
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
    currentDay() {
      return new Date().toLocaleDateString('ru');
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
    prevMonthPlan() {
      let prevMonth;
      if (this.currentMonth === 0) {
        prevMonth = 11;
      } else {
        prevMonth = this.currentMonth - 1;
      }

      return this.planData[this.currentYear][prevMonth];
    },
    restAmount() {
      return this.currentPlan.plannedAmount - this.currentPlan.done;
    },
  },
  created() {
    this.updateSavedData();
    this.calculateDebt();
    const sliderHandModeInfo = getSavedInfo('h_slider__month') || {};
    this.updateShownPlan(sliderHandModeInfo);
    console.log('plan: ', this.currentPlan);
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
    updateCurrentPlan(editInfoType) {
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
      // ! остановилась на переписывании этой функции
      // console.log('plan: ', this.currentPlan);
      console.log('planData: ', this.planData);
    },
    updateShownPlan(info) {
      if (info.sliderType === 'month') {
        this.handModeMonth = info.index;
      } else {
        this.handModeYear = this.years[info.index];
      }
    },
    updateSavedData() {
      this.doneInfo = getSavedInfo('lesson-reports__history-done') || [];
      this.missedInfo = getSavedInfo('lesson-reports__history-missed') || [];
      const savedPlan = getSavedInfo('lesson-reports__planData');
      if (savedPlan) {
        this.planData = savedPlan;
      }
    },
    calculateDebt() {
      // * устанавливаем долг в последний день месяца, 24 часа и сохраняем в lc
      this.currMonthDays = getDaysInMonth(this.currentMonth, this.currentYear);
      if (this.currentDay === this.currMonthDays
      && new Date().getHours() === 24
      && this.restAmount) {
        this.currentPlan.debt = this.restAmount;
        saveInfo('lesson-reports__planData', this.planData);
      }

      if (this.prevMonthPlan?.debt) {
        this.currentPlan.debt = this.prevMonthPlan.debt;
        this.currentPlan.plannedAmount += this.currentPlan.debt;
      }
    },
  },
};
</script>
