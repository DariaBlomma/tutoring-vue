<template>
  <div class="page home-page">
    <header class='header'/>
    <main class='main'>
      <h1 class='primary-title light'>Contents</h1>
      <IconsLinksList :links="contentLinks"/>
    </main>
    <footer/>
  </div>
</template>

<script setup>
import IconsLinksList from '@/components/ui/IconsLinksList.vue';

const contentLinks = [
  {
    routeName: 'horizonte-6',
    linkTitle: 'Horizonte 6',
    icon: 'contents/german.png',
  },
  {
    routeName: 'english',
    linkTitle: 'English',
    icon: 'contents/english.png',
  },
];

</script>
