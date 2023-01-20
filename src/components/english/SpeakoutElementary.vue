<template>
  <div class="page page--dark-theme english">
    <header>
      <router-link
        class="go-back light"
        :to="{name: 'home'}"
      >
        To home page
      </router-link>
    </header>
    <div class="page__contents">
      <h1 class="primary-title heading-white">Speakout Elementary Workbook 2nd edition</h1>
      <FillGapsExercise
        :tasks="page10ex3"
      >
        <template v-slot:title>
          Grammar. Present Simple. <i>I/you/we/they</i>
        </template>
        <template v-slot:exercise-number>
          Page 10. Ex. 3
        </template>
        <template v-slot:task>
          Write the questions and short answers.
        </template>
      </FillGapsExercise>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import FillGapsExercise from '@/components/english/FillGapsExercise.vue';
import { page10ex3 } from '@/constants'; </script>

<style scoped>

</style>
