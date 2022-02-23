<template>
  <h2
    class='secondary-title heading-white'
    id='linking_words'
  >
    Linking words
  </h2>
  <div class='linking-words'>
    <Dictionary :words="linking_words" />
    <div class='lesson-materials__example-text'>
      <LinkingWordsExampleText />
    </div>
  </div>
</template>

<script>

import Dictionary from '@/components/lessons/LessonMaterialsDictionary.vue';
import LinkingWordsExampleText from '@/components/lessons/LinkingWordsExampleText.vue';

export default {
  name: 'LinkingWords',
  components: {
    Dictionary,
    LinkingWordsExampleText,
  },
  data() {
    return {
      linking_words: {
        en: [
          'which',
          'as well as',
          'that',
          'whether',
          'so',
          'because',
          'for',
          'but',
          'like',
          'such as',
          'whereas',
        ],
        ru: [
          'который',
          'так же, как и',
          'что',
          'ли',
          'так, таким образом',
          'потому что',
          'так как',
          'но',
          'как (сравнение)',
          'такие (-ой, -ая) как',
          'в то время как',
        ],
      },
    };
  },
};
</script>
