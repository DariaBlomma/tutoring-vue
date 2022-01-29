<template>
<div class="page page--dark-theme lesson-reports">
    <header>
      <router-link class='go-back light' :to="{name: 'ege'}">Go back</router-link>
    </header>
  <h1 class='primary-title heading-white centered'>Отчеты по проведенным занятиям</h1>
  <HorizontalSlider
    :slides="years"
    status='primary'
    dateType='year'
  />
  <HorizontalSlider
    :slides="months"
    @slide-chosen="changeShownPlan"
  />
  <main class='lesson-reports__main'>
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
    <div
      v-if="showEditInfo"
      class='edit-info'
    >
      <img
        src='@/assets/cross.png'
        class='icon close-icon'
        @click="closeEdit"
      >
      <b class='edit-info__title' :class="editTypeClass">
        {{ editTypeTitle }}
      </b>
      <div class='edit-info__column edit-info__column--date'>
        <b class='edit-info__title'>Дата занятия</b>
        <input
          type='date'
          class='edit-info__input'
          @input="saveEditInfo('date', $event.target.value)"
        >
      </div>
      <div class='edit-info__column edit-info__column--time'>
        <b class='edit-info__title'>Длительность (в часах)</b>
        <input
          type='number'
          class='edit-info__input edit-info__input--number'
          @input="saveEditInfo('time', parseFloat($event.target.value))"
        >
      </div>
      <div class='edit-info__column edit-info__column--comment'>
        <b class='edit-info__title'>Комментарий</b>
        <textarea
          class='edit-info__comment-text'
          @input="saveEditInfo('comment', $event.target.value)"
        />
      </div>
    </div>
    <div
      v-if="showHistoryInfo"
      class='history-info'
    >
      <img
        src='@/assets/cross.png'
        class='icon close-icon'
        @click="closeHistory"
      >
      <h3 class='history-info__block-title light'>История изменений</h3>
      <div class='histoty-info__column history-info__column--done'>
        <b class='history-info__title done'>
          Проведенные занятия
        </b>
        <div class='history-info__line history-info__line--date'>
        <HistoryTable :data="doneInfo"/>
      </div>
      </div>
      <div class='histoty-info__column history-info__column--missed'>
        <b class='history-info__title missed'>
          Пропущенные занятия
        </b>
        <HistoryTable :data="missedInfo"/>
      </div>
    </div>
  </main>
</div>
</template>

<script>
// todo:
// todo 1) обнулять в 12 ночи историю изменений,
import HorizontalSlider from '@/components/HorizontalSlider.vue';
import HistoryTable from '@/components/HistoryTable.vue';
import saveInfo from '@/helpers/saveInfo';
import getSavedInfo from '@/helpers/getSavedInfo';
import getDaysInMonth from '@/helpers/getDaysInMonth';

export default {
  name: 'LessonReports',
  components: {
    HorizontalSlider,
    HistoryTable,
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
            done: 4.5,
            missed: 1,
            debt: 0,
          },
          1: {
            plannedAmount: 8,
            done: 0,
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
      return this.handModeMonth || new Date().getMonth();
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
    updateCurrentPlan(object) {
      this.currentPlan[object.type] += object.value;
    },
    saveEditInfo(elem, value) {
      if (this.editTypeClass === 'done') {
        this.doneInfo[elem] = value;
        saveInfo('lesson-reports__history-done', this.doneInfo);
      } else {
        this.missedInfo[elem] = value;
        saveInfo('lesson-reports__history-missed', this.missedInfo);
      }
      if (elem === 'time') {
        const obj = {
          type: this.editTypeClass,
          value,
        };
        this.updateCurrentPlan(obj);
        saveInfo('lesson-reports__planData', this.planData);
      }
    },
    changeShownPlan(info) {
      if (info.sliderType === 'month') {
        this.handModeMonth = info.index;
      } else {
        this.handModeYear = this.years[info.index];
      }
    },
    updateSavedData() {
      this.doneInfo = getSavedInfo('lesson-reports__history-done') || {};
      this.missedInfo = getSavedInfo('lesson-reports__history-missed') || {};
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
