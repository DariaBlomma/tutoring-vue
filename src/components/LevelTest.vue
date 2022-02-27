<template>
  <div class="level-test"
  :id="testId">
    <h2 class="secondary-title heading-white centered"> {{ testTitle}} </h2>
    <ul class="level-test__list">
      <li
        class="level-test__item"
        v-for="(item, index ) in test"
        :key="item.id"
      >
        <div class="level-test__header">
          <div class="ol-custom-marker">
            {{ index + 1 }}
          </div>
          <div class="level-test__task">
            {{ item.task }}
          </div>
        </div>
        <div v-if="item.links" class="level-test__links">
          <ul>
            <li
              v-for="link in item.links"
              :key="link.address"
            >
              <a class="link" :href="link.address">{{ link.title }}</a>
            </li>
          </ul>
        </div>
        <div
          v-if="item.questionsList"
          class="level-test__answer-field"
        >
          <ol>
            <li
              v-for="elem in item.questionsList"
              :key="elem.id"
            >
              <div v-html="elem.questionText" />
              <div v-if="elem.answer">
                <span class="answer">Answer: </span>
                <InputAnswer :readyFullWord="elem.answer"/></div>
            </li>
          </ol>
        </div>
        <img
          v-if="item.img"
          :src="require(`@/assets/english-level-tests/${item.img.name}`)"
          class="level-test__img"
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import InputAnswer from '@/components/InputAnswer.vue';

const props = defineProps({
  testId: {
    type: String,
    default: '',
  },
  testTitle: {
    type: String,
    default: '',
  },
  test: {
    type: Array,
    required: true,
  },
});

const { testTitle, test } = toRefs(props);
</script>
