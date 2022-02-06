<template>
<div class="page ege-lesson-materials">
    <header>
      <router-link class='go-back light' :to="{name: 'ege'}">
        Back to EGE page
      </router-link>
    </header>
  <h1 class='primary-title heading-white centered'>Lesson materials</h1>
  <ContentsList :contentsList="lessonsList" id='contents_list'/>
  <LinkingWords />
  <ScrollTopBtn />
</div>
</template>

<script>
import LinkingWords from '@/components/lessons/LinkingWords.vue';
import ContentsList from '@/components/ContentsList.vue';
import ScrollTopBtn from '@/components/ScrollTopBtn.vue';

export default {
  name: 'LessonMaterials',
  components: {
    LinkingWords,
    ContentsList,
    ScrollTopBtn,
  },
  data() {
    return {
      lessonsList: [
        {
          moveTo: 'linking_words',
          title: 'Linking words',
        },
        // {
        //   moveTo: 'my_heart_will_go_on',
        //   title: 'Celine Dion. My heart will go on',
        // },
      ],
    };
  },
};
</script>
