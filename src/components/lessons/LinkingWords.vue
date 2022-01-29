<template>
  <h2
    class='secondary-title heading-white'
    id='linking_words'
  >
    Linking words
  </h2>
  <div class='linking-words'>
    <div class='dictionary__item-inner'>
      <ul>
        <li
          class='linking-words__line'
          v-for='item in linking_words.en'
          :key='item'
        >
        {{item}}
        </li>
      </ul>
      <ul>
        <li
          class='linking-words__line-ru'
          v-for='item in linking_words.ru'
          :key='item'
        >
        {{item}}
        </li>
      </ul>
    </div>
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
  </div>
</template>

<script>
import InputAnswer from '@/components/InputAnswer.vue';

export default {
  name: 'LinkingWords',
  components: { InputAnswer },
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
