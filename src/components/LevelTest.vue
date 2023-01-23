<template>
  <div
    class="level-test"
    :id="id"
  >
    <h2 class="secondary-title heading-white centered"> {{ title }} </h2>
    <ul class="level-test__list">
      <li
        class="level-test__item"
        v-for="(item, index ) in tasks"
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
        <div
          v-if="item.links"
          class="level-test__links"
        >
          <ul>
            <li
              v-for="link in item.links"
              :key="link.address"
            >
              <a
                class="link"
                :href="link.address"
              >
                {{ link.title }}
              </a>
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
                <InputAnswer :readyFullWord="elem.answer" />
              </div>
            </li>
          </ol>
        </div>
        <img
          v-if="item.img"
          :src="require(`@/assets/english-level-tests/${item.img.name}`)"
          class="level-test__img"
        >
        <audio
          v-if="item.audio"
          controls
          :src="require(`@/assets/english-level-tests/${item.audio}`)"
        ></audio>
      </li>
    </ul>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { defineProps, toRefs } from 'vue';
import InputAnswer from '@/components/InputAnswer.vue';
import type { Task } from '@/types';

interface Props {
  id?: string,
  title?: string,
  tasks: Task[],
}

const props = defineProps<Props>();

const {
  id,
  title,
  tasks,
} = toRefs(props);
</script>

<style
  scoped
  lang="scss"
>
@import '@/styles/variables.scss';

.level-test {
  margin-top: $margin-normal * 2;

  &__list {
    max-width: 900px;
    margin: 0 auto;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__header {
    display: flex;
    width: 100%;
    margin-bottom: $margin-normal;
  }

  &__task {
    padding: $margin-normal;
    background-color: $light-blue-color;
    width: 100%;
  }

  &__answer-field {
    background-color: $_0-grey-color;
    padding: $margin-normal;
    margin-top: $margin-normal;
    width: max-content;
  }

  &__img {
    width: 500px;
    margin-top: $margin-normal;
  }

  .ol-custom-marker {
    min-width: 30px;
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $dark-purple-color;
    color: $_0-grey-color;
    padding: $margin-normal;
    margin-right: $margin-normal;
  }

  .answer {
    color: $dark-purple-color;
    font-weight: bold;
  }
}

@media (max-width: 900px) {
  .level-test {
    &__list {
      max-width: 500px;
    }
  }
}

@media (max-width: 600px) {
  .level-test {
    &__list, &__answer-field {
      max-width: 300px;
    }

    .input {
      width: 200px;
    }
  }
}

@media (max-width: 350px) {
  .level-test {
    &__list, &__answer-field {
      max-width: 200px;
    }

    .input {
      width: 100px;
      margin: $margin-normal 0;
    }
  }
}

</style>
