<template>
<!-- сделан отдельным компонентом,
потому что иначе классы подсветки ответа применяются для всех инпутов сразу
(классы завязаны на this.isRightAnswer)  -->
  <input
    type='text'
    :class='["input", {"right": isRightAnswer, "wrong": isWrongAnswer}]'
    v-model='wordBase'
    :data-answer='fullWord'
    @change='checkAnswer'
  >
</template>

<script>
export default {
  name: 'InputAnswer',
  props: {
    // слово без окончания, первоначальное значение инпута. Ученик будет вписывать только окончания
    word: {
      type: String,
      required: true,
    },
    // окончание
    ending: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isRightAnswer: false,
      isWrongAnswer: false,
      // слово без окончания, нужно, чтобы не мутировать пропс в v model
      wordBase: '',
    };
  },
  created() {
    this.wordBase = this.word;
  },
  computed: {
    // вернет слово -образец для проверки правильного ответа
    fullWord() {
      return this.word + this.ending;
    },
  },
  methods: {
    // деструктуризация - event.target.value, event.target.dataset.answer
    checkAnswer({ target: { value, dataset: { answer } } }) {
      if (value === answer) {
        this.isRightAnswer = true;
      } else {
        this.isWrongAnswer = true;
      }
    },
  },
};
</script>
