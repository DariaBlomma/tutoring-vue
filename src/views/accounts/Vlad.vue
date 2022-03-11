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
        <IconsLinksList :links="contentLinks"/>
        <router-view/>
      </div>
    </main>
    <footer>
      <ScrollTopBtn />
    </footer>
  </div>
</template>

<script setup>
import IconsLinksList from '@/components/ui/IconsLinksList.vue';
import ScrollTopBtn from '@/components/ScrollTopBtn.vue';

const contentLinks = [
  {
    routeName: 'lesson-plans',
    routeParams: {
      name: 'vlad',
    },
    linkTitle: 'Lesson Plans',
    icon: 'contents/todo.png',
  },
  {
    routeName: 'lesson-1',
    linkTitle: 'Lesson 1. Tenses, Present Simple, to be, Speaking',
    icon: 'contents/english.png',
  },
  {
    routeName: 'lesson-2',
    linkTitle: 'Lesson 2. Present Simple, listening',
    icon: 'contents/english.png',
  },
  {
    routeName: 'lesson-3',
    linkTitle: 'Lesson 3. To be, speaking',
    icon: 'contents/english.png',
  },
];
</script>
