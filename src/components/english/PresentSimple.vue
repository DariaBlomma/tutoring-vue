<template>
  <div class="sub-page sub-page--dark-theme present-simple">
    <header class="sub-page__header">
      <router-link class='go-back light' :to="{name: 'en-tenses'}">
        To Tenses
      </router-link>
    </header>
    <main>
      <div class='sub-page__contents'>
        <h2 class='secondary-title heading-white'>Present Simple</h2>
        <img
          src='@/assets/english/present-simple.jpg'
          class="img desktop-img"
        >
        <!-- картинки для адаптива на маленьких экранов -->
        <img
          src='@/assets/english/present-simple/adaptive/affirmative-till-500.png'
          class="img max-500-img"
        >
        <img
          src='@/assets/english/present-simple/adaptive/negative-till-500.png'
          class="img max-500-img"
        >
        <img
          src='@/assets/english/present-simple/adaptive/questions-till-500.png'
          class="img max-500-img"
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
