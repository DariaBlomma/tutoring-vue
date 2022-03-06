<template>
  <div class="page page--dark-theme masha">
    <header>
      <router-link class='go-back light' :to="{name: 'english'}">
        To English page
      </router-link>
    </header>
    <main>
      <div class='page__contents'>
        <h1 class='primary-title heading-white'>Contents</h1>
        <IconsLinksList :links="contentLinks"/>
      </div>
    </main>
    <footer/>
  </div>
</template>

<script setup>
import IconsLinksList from '@/components/ui/IconsLinksList.vue';

const contentLinks = [
  {
    routeName: 'masha-dictionaries',
    linkTitle: 'Dictionaries',
    icon: 'contents/dictionary.png',
  },
  {
    routeName: 'lesson-materials',
    linkTitle: 'Lesson materials',
    icon: 'contents/exercise.png',
  },
  {
    routeName: 'hw-tasks',
    linkTitle: 'Homework tasks',
    icon: 'contents/hw.png',
  },
  {
    routeName: 'lesson-reports',
    linkTitle: 'Отчеты по проведенным занятиям',
    icon: 'contents/report.png',
  },
  {
    routeName: 'lesson-plans',
    routeParams: {
      name: 'masha',
    },
    linkTitle: 'Lesson plans',
    icon: 'contents/todo.png',
  },
  // {
  //   routeName: 'en-word-forms',
  //   linkTitle: 'Word forms',
  // },
];

</script>
