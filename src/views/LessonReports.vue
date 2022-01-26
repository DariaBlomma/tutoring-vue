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
};
</script>
