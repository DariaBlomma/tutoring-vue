<template>
  <div class='lesson-materials__dictionary'>
    <ul>
      <li
        class='lesson-materials__line'
        v-for='item in words.en'
        :key='item'
      >
      {{item}}
      </li>
    </ul>
    <ul>
      <li
        class='lesson-materials__line-ru'
        v-for='item in words.ru'
        :key='item'
      >
      {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LessonMaterialsDictionary',
  props: {
    // { en: [], ru: []}
    words: {
      type: Object,
      required: true,
    },
  },
};
</script>
