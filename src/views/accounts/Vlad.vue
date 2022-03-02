<template>
  <div class="page page--dark-theme english">
    <header>
      <router-link class='go-back light' :to="{name: 'home'}">
        To home page
      </router-link>
    </header>
    <main>
      <div class='page__contents'>
        <h1 class='primary-title heading-white'>Vlad</h1>
        <ContentLinksList :links="contentLinks"/>
      </div>
      <router-view/>
    </main>
    <footer/>
  </div>
</template>

<script setup>
import ContentLinksList from '@/components/ui/ContentLinksList.vue';

const contentLinks = [
  {
    routeName: 'lesson-1',
    linkTitle: 'Lesson 1. Tenses, Present Simple, to be',
    icon: 'contents/english.png',
  },
  // {
  //   routeName: 'en-word-forms',
  //   linkTitle: 'Word forms',
  // },
];
</script>
