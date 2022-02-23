<template>
  <ol>
    <li class='linking-words__example'>
      On receipt of a call the 999 Room operator ascertains by
      electronic device the position of the nearest available police car
      <InputAnswer
        word=''
        ending=''
        readyFullWord='which'
      />
      is contacted by radio
    </li>
    <li class='linking-words__example'>
      Make sure
      <InputAnswer
        word=''
        ending=''
        readyFullWord='that'
      />
      this policeman will bring the criminal to justice
    </li>
    <li class='linking-words__example'>
      One dog, for example, can search a warehouse in ten minutes,
      <InputAnswer
        word=''
        ending=''
        readyFullWord='whereas'
      />
      the same search would take six men an hour
    </li>
    <li class='linking-words__example'>
      These horses are particularly suited to ceremonial occasions,
      <InputAnswer
        word=''
        ending=''
        readyFullWord='for'
      />
      they are accustomed to military bands
    </li>
    <li class='linking-words__example'>
      Retail is still a big employer,
      <InputAnswer
        word=''
        ending=''
        readyFullWord='but'
      />
      a lot more of it is being done online
    </li>
    <li class='linking-words__example'>
      I could not understand
      <InputAnswer
        word=''
        ending=''
        readyFullWord='whether'
      />
      she improved her English skills or not
    </li>
    <li class='linking-words__example'>
      It seemed
      <InputAnswer
        word=''
        ending=''
        readyFullWord='like'
      />
      it's going to rain soon
    </li>
    <li class='linking-words__example'>
      This research,
      <InputAnswer
        word=''
        ending=''
        readyFullWord='as well as'
      />
      my own thoughts made me think that the Egyptian pyramids
      were not built by slaves without any modern technologies.
    </li>
  </ol>
</template>

<script>
import InputAnswer from '@/components/InputAnswer.vue';

export default {
  name: 'LinkingWordsExampleText',
  components: {
    InputAnswer,
  },
};
</script>
