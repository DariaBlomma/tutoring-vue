<template>
  <div class='lesson-materials__dictionary'>
    <ul>
      <li
        class='lesson-materials__line'
        v-for='item in props.words.en'
        :key='item'
      >
      {{item}}
      </li>
    </ul>
    <ul>
      <li
        class='lesson-materials__line-ru'
        v-for='item in props.words.ru'
        :key='item'
      >
      {{item}}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  // { en: [], ru: []}
  words: {
    type: Object,
    required: true,
  },
});
</script>
