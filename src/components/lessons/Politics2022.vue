<template>
  <h2
    class='secondary-title heading-white'
    id='politics_2022'
  >
    Some politics of 2022
  </h2>
  <div class='politics-words'>
    <Dictionary :words="politicsWords"/>
    <div class='lesson-materials__example-text'>
      <PoliticsExampleText />
    </div>
  </div>
</template>

<script setup>
import Dictionary from '@/components/lessons/LessonMaterialsDictionary.vue';
import PoliticsExampleText from '@/components/lessons/PoliticsExampleText.vue';

const politicsWords = {
  en: [
    'to recognize',
    'independence',
    'to condemn',
    'invasion',
    'to sign a decree',
    'to send troops',
    'separatist regions',
    'to support',
    'violence',
    'a long-running conflict',
    'to express disappointment',
    'to warn against the actions',
    'to escalate/deescalate',
    'to withdraw forces',
    'an international law',
    'violation',
    'sovereignity and integrity',
    'to continue',
    'to provide support to the separatists',
  ],
  ru: [
    'признать',
    'независимость',
    'осуждать',
    'вторжение',
    'подписать указ',
    'послать войска',
    'сепаратистские регионы',
    'поддерживать',
    'насилие, жестокость',
    'долгосрочный конфликт',
    'выразить разачарование',
    'предостеречь от действий',
    'обострять (конфликт)/ снимать напряженность конфликта',
    'отвести силы (войска)',
    'международный закон',
    'нарушение',
    'суверенность и целостность',
    'продолжать',
    'обеспечить поддержку сепаратистам',
  ],
};
</script>
