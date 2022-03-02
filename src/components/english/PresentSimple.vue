<template>
  <div class="page page--dark-theme en-grammar">
    <header>
      <router-link class='go-back light' :to="{name: 'en-tenses'}">
        To Tenses
      </router-link>
    </header>
    <main>
      <div class='page__contents'>
        <h2 class='secondary-title heading-white'>Present Simple</h2>
        <img
          src='@/assets/english/present-simple.jpg'
          class='all-tenses-funny'
        >
        <a
          href='https://docs.google.com/document/d/1tpHI2TYpOh_TzulmafrxtdomB5eCarUmAANOgVW6weg/edit?usp=sharing'
          class='link'
        >
          Complete theoretical info
        </a>
        <router-view />
      </div>
    </main>
    <footer />
  </div>
</template>

<script setup>
</script>
