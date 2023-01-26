<template>
  <div class="page page--dark-theme">
    <header>
      <router-link
        class="go-back light"
        :to="{name: 'english'}"
      >
        To English page
      </router-link>
    </header>
    <div class="page__contents">
      <h1 class="primary-title heading-white">Crosswords</h1>
      <!--  https://crosswordlabs.com/ -->
      <p class="instruction">
        Click a cell to start solving your puzzle,
        or select a print option.
      </p>
      <div
        class="crossword"
        v-for="crossword in iframes"
        :key="crossword.id"
      >
        <h3 class="title-3">{{ crossword.name }}</h3>
        <iframe
          width="500"
          height="500"
          style="
          background-color:white;
          padding:5px 0px 0 5px;
          border:3px solid black;
          margin:auto;
          display:block
        "
          frameborder="0"
          :src="crossword.src"
        ></iframe>
      </div>
    </div>
    <footer />
  </div>
  <h1></h1>
</template>

<script
  setup
  lang="ts"
>
import { iframes } from '@/constants'; </script>

<style
  scoped
  lang="scss"
>
@import '@/styles/variables.scss';

.primary-title {
  margin-bottom: 20px;
}

.title-3 {
  margin-bottom: 10px;
}

.instruction {
  color: $_2_yellow-color;
  margin-bottom: 10px;
}

.crossword {
  margin-bottom: 15px;
  text-align: center;
}
</style>
