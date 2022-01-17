<template>
<div class="page ege-lesson-materials">
    <header>
      <router-link class='go-back light' :to="{name: 'ege'}">Go back</router-link>
    </header>
  <h1 class='primary-title heading-light centered'>Lesson materials</h1>
  <LinkingWords />
</div>
</template>

<script>
import LinkingWords from '@/components/lessons/LinkingWords.vue';

export default {
  name: 'EGELessonMaterials',
  components: {
    LinkingWords,
  },
  data() {
    return {
    };
  },
};
</script>
