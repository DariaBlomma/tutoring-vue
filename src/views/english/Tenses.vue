<template>
  <div class="page page--dark-theme en-grammar">
    <header>
      <router-link class='go-back light' :to="{name: 'english'}">
        To English page
      </router-link>
    </header>
    <main>
      <div class='page__contents'>
        <h1 class='primary-title heading-white'>Tenses</h1>
          <ContentsList :contentsList="subRoutesList" use-router-links/>
          <router-view />
      </div>
    </main>
    <footer>
      <ScrollTopBtn />
    </footer>
  </div>
</template>

<script setup>
import ContentsList from '@/components/ui/ContentsList.vue';
import ScrollTopBtn from '@/components/ScrollTopBtn.vue';

const subRoutesList = [
  {
    moveTo: 'all-en-tenses',
    title: 'All tenses',
  },
  {
    moveTo: 'present-simple',
    title: 'Present Simple',
    sublist: [
      {
        moveTo: 'to-be-in-present-simple',
        title: 'To be in Present Simple',
        uniqueNumber: '',
      },
    ],
  },
];
</script>
