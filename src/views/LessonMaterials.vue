<template>
<div class="page ege-lesson-materials">
    <header>
      <router-link class='go-back light' :to="{name: 'ege'}">Go back</router-link>
    </header>
  <h1 class='primary-title heading-light centered'>Lesson materials</h1>
  <ContentsList :contentsList="lessonsList"/>
  <LinkingWords />
</div>
</template>

<script>
import LinkingWords from '@/components/lessons/LinkingWords.vue';
import ContentsList from '@/components/ContentsList.vue';

export default {
  name: 'LessonMaterials',
  components: {
    LinkingWords,
    ContentsList,
  },
  data() {
    return {
      lessonsList: [
        {
          moveTo: 'linking_words',
          title: 'Linking words',
        },
        {
          moveTo: 'my_heart_will_go_on',
          title: 'Celine Dion. My heart will go on',
        },
      ],
    };
  },
};
</script>
