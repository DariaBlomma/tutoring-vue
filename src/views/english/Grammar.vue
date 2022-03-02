<template>
  <div class="page page--dark-theme en-grammar">
    <header>
      <router-link class='go-back light' :to="{name: 'home'}">
        To home page
      </router-link>
    </header>
    <main>
      <div class='page__contents'>
        <h1 class='primary-title heading-white'>Grammar</h1>
        <ContentLinksList :links="contentLinks"/>
      </div>
    </main>
    <footer/>
  </div>
</template>

<script setup>
import ContentLinksList from '@/components/ui/ContentLinksList.vue';

const contentLinks = [
  {
    routeName: 'en-tenses',
    linkTitle: 'Tenses',
    icon: 'contents/english.png',
  },
];
</script>
