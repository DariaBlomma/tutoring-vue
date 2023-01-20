<template>
  <div class="exercise">
    <h3 class="title-3">
      <slot name="title"></slot>
    </h3>
    <h4 class="title-4">
      <slot name="exercise-number"></slot>
    </h4>
    <p class="task">
      <slot name="task"></slot>
      Click outside the input to check the answer.
    </p>
    <div class="content">
      <ol>
        <li
          v-for="(task, index) in tasks"
          :key="index"
        >
          <template
            v-for="elem in task"
            :key="elem.question"
          >
            <div class="speaker-line">{{ elem.question }}</div>
            <InputAnswer
              :right-answer="elem.answer"
            />
          </template>
        </li>
      </ol>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { defineProps, reactive } from 'vue';
import InputAnswer from '@/components/InputAnswer.vue';

interface Props {
  tasks: [
    [
      {
        question: String,
        answer: String,
      },
    ],
  ],
}

const props = defineProps<Props>();

const { tasks } = reactive(props);
</script>

<style
  scoped
  lang="scss"
>
@import '@/styles/variables.scss';

.task {
  font-weight: bold;
  color: $_2_yellow-color;
  opacity: 0.8;
}

.content {
  color: $_0-grey-color;
}
</style>
