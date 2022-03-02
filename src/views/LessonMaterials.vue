<template>
<div class="page lesson-materials">
    <header>
      <router-link class='go-back light' :to="{name: 'ege'}">
        Back to EGE page
      </router-link>
    </header>
  <h1 class='primary-title heading-white centered'>Lesson materials</h1>
  <ContentsList :contentsList="lessonsList" id='contents_list'/>
  <LinkingWords />
  <Politics2022 />
  <ScrollTopBtn />
</div>
</template>

<script>
import LinkingWords from '@/components/lessons/LinkingWords.vue';
import Politics2022 from '@/components/lessons/Politics2022.vue';
import ContentsList from '@/components/ui/ContentsList.vue';
import ScrollTopBtn from '@/components/ScrollTopBtn.vue';

export default {
  name: 'LessonMaterials',
  components: {
    LinkingWords,
    ContentsList,
    Politics2022,
    ScrollTopBtn,
  },
  setup() {
    const lessonsList = [
      {
        moveTo: 'linking_words',
        title: 'Linking words',
      },
      {
        moveTo: 'politics_2022',
        title: 'Some politics of 2022',
      },
      // {
      //   moveTo: 'my_heart_will_go_on',
      //   title: 'Celine Dion. My heart will go on',
      // },
    ];

    return { lessonsList };
  },
};
</script>
