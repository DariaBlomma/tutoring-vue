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
      <b class='plan-info__title'>
        Запланировано:
      </b>
      <span class='span-info__number'>36 </span>
      <span class='span-info__measurement'>часов</span>
    </div>
    <div class='plan-info__line'>
      <b class='plan-info__title'>
        Проведено на {{ currentDay }}:
      </b>
      <span class='span-info__number'>36 </span>
      <span class='span-info__measurement'>часов</span>
    </div>
    <div class='plan-info__line'>
      <b class='plan-info__title'>
        Пропущено на {{ currentDay }}:
      </b>
      <span class='span-info__number'>36 </span>
      <span class='span-info__measurement'>часов</span>
    </div>
    <div class='plan-info__line'>
      <b class='plan-info__title'>
        Осталось провести:
      </b>
      <span class='span-info__number'>36 </span>
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
    };
  },
  computed: {
    currentDay() {
      return new Date().toLocaleDateString('ru');
    },
  },
};
</script>
