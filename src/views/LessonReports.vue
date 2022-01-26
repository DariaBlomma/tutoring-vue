<template>
<div class="page page--dark-theme lesson-reports">
    <header>
      <router-link class='go-back light' :to="{name: 'ege'}">Go back</router-link>
    </header>
  <h1 class='primary-title heading-light centered'>Отчеты по проведенным занятиям</h1>
  <HorizontalSlider
    :slides="years"
    status='primary'
  />
  <HorizontalSlider
    :slides="months"
  />
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
      <img src='@/assets/edit.png' class='edit-icon edit-done'>
    </div>
    <div class='plan-info__line'>
    </div>
    <div class='plan-info__line'>
      <b class='plan-info__title missed'>
        Пропущено на
      </b>
      <span class='plan-info__date'>{{ currentDay }}</span>
      <span> : </span>
      <span class='span-info__number'>{{ currentPlan.missed + ' ' }}</span>
      <span class='span-info__measurement'>часов</span>
      <img src='@/assets/edit.png' class='edit-icon edit-missed'>
    </div>
    <div class='plan-info__line'>
      <b class='plan-info__title'>
        Осталось провести:
      </b>
      <span class='span-info__number'>{{ restAmount + ' ' }}</span>
      <span class='span-info__measurement'>часов</span>
    </div>
  </div>
</div>
</template>

<script>
import HorizontalSlider from '@/components/HorizontalSlider.vue';

export default {
  name: 'LessonReports',
  components: {
    HorizontalSlider,
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
            plannedAmount: 8,
            done: 3.5,
            missed: 1,
          },
        },
      },
    };
  },
  computed: {
    currentDay() {
      return new Date().toLocaleDateString('ru');
    },
    currentYear() {
      return new Date().getFullYear();
    },
    currentMonth() {
      return new Date().getMonth();
    },
    currentPlan() {
      return this.planData[this.currentYear][this.currentMonth];
    },
    restAmount() {
      return this.currentPlan.plannedAmount - this.currentPlan.done;
    },
  },
};
</script>
