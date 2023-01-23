<template>
  <div class="page page--dark-theme english">
    <header>
      <router-link
        class="go-back light"
        :to="{ name: 'english' }"
      >
        To English page
      </router-link>
    </header>
    <main>
      <div class="page__contents">
        <h1 class="primary-title heading-white centered">Level tests</h1>
        <ContentsList :contentsList="contentsList" />
        <LevelTest
          id="beginner"
          title="Beginner"
          :tasks="beginnerTest"
        />
        <LevelTest
          id="pre-intermediate"
          title="Pre-Intermediate"
          :tasks="preIntermediateTest"
        />
      </div>
    </main>
    <footer>
      <ScrollTopBtn />
    </footer>
  </div>
</template>

<script
  setup
  lang="ts"
>
import ContentsList from '@/components/ui/ContentsList.vue';
import ScrollTopBtn from '@/components/ScrollTopBtn.vue';
import LevelTest from '@/components/LevelTest.vue';
import { beginnerTest, preIntermediateTest } from '@/constants';

const contentsList = [
  {
    moveTo: 'beginner',
    title: 'Beginner',
  },
  {
    moveTo: 'pre-intermediate',
    title: 'Pre-intermediate',
  },
];

</script>
