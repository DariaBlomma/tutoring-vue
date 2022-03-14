<template>
  <div class="page page--dark-theme english">
    <header>
      <router-link class='go-back light' :to="{name: 'home'}">
        To home page
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
    routeName: 'level-tests',
    linkTitle: 'Level tests',
    icon: 'contents/exercise.png',
  },
  {
    routeName: 'en-grammar',
    linkTitle: 'Grammar',
    icon: 'contents/dictionary.png',
  },
  // {
  //   routeName: 'spotlight',
  //   linkTitle: 'Spotlight',
  //   icon: 'contents/english.png',
  // },
  {
    routeName: 'vlad',
    linkTitle: 'Vlad',
    icon: 'contents/account.png',
    class: 'vlad-avatar',
  },
  {
    routeName: 'masha',
    linkTitle: 'Masha',
    icon: 'contents/masha-avatar.jpg',
    personalImg: true,
    class: 'masha-avatar',
  },
  // {
  //   routeName: 'en-word-forms',
  //   linkTitle: 'Word forms',
  // },
];
</script>
