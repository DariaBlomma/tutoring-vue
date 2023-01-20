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
      default: '',
    },
    // окончание
    ending: {
      type: String,
      default: '',
    },
    // просто слово-ответ для проверки
    rightAnswer: {
      type: String,
      required: true,
    },
    // массив слов-исключений и соответствующих классов на основе местоимений
    exceptions: {
      type: Array,
      required: false,
      default: () => [],
    },
    // условный id инпута для проверки - исключение он или нет
    // структура : Местоимение-word
    pronounClass: {
      type: String,
      required: false,
      default: '',
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
  mounted() {
    this.wordBase = this.word;
  },
  computed: {
    // вернет слово -образец для проверки правильного ответа
    fullWord() {
      let name = this.word + this.ending;
      if (this.rightAnswer) {
        name = this.rightAnswer;
      }
      if (this.exceptions) {
        this.exceptions.forEach(item => {
          if (item[1] === this.pronounClass) {
            [name] = item;
          }
        });
      }

      return name;
    },
  },
  methods: {
    // деструктуризация - event.target.value, event.target.dataset.answer
    checkAnswer({ target: { value, dataset: { answer } } }) {
      if (value.trim() === answer) {
        this.isWrongAnswer = false;
        this.isRightAnswer = true;
      } else {
        this.isRightAnswer = false;
        this.isWrongAnswer = true;
      }
    },
  },
};
</script>
