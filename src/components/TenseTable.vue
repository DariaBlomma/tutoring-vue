<template>
  <div class='table-wrapper'>
    <slot>
      <!-- заголовок -->
    </slot>
      <table class='table'>
          <tbody
            v-if='showContent'
            class='pronouns'
          >
            <!-- показываются либо инпуты, либо обычный текст ячеек -->
            <tr
              v-for='(item, i) in totalTable'
              :key='i'
            >
              <th>{{item.singular.pronoun}}</th>
              <td>
                <InputAnswer
                  v-if='showInputs'
                  :showInputs='toggledElems.inputs'
                  :word='item.singular.word'
                  :ending='item.singular.ending'
                />
                <!-- если слово спрягается по особенному,
                можно передать в слот  форму
                с нужной выделенной жирным частью -->
                <span v-if='!showInputs'>
                  <slot name='sing-word'>{{item.singular.word}}</slot>
                  <slot name='sing-ending'><b>{{item.singular.ending}}</b></slot>
                </span>
                </td>
              <th>{{item.plural.pronoun}}</th>
              <td>
                <InputAnswer
                  v-if='showInputs'
                  :showInputs='toggledElems.inputs'
                  :word='item.plural.word'
                  :ending='item.plural.ending'
                />
                <span v-if='!showInputs'>
                  <slot name='plural-word'>{{item.plural.word}}</slot>
                  <slot name='plural-ending'><b>{{item.plural.ending}}</b></slot>
                </span>
                </td>
            </tr>
          </tbody>
          <tfoot>
              <th colspan="2">
                <button
                  class='btn btn-toggle'
                  @click='$emit("toggleElems", name + "Content")'
                >
                  Zeigen/verstecken
                </button>
              </th>
              <th colspan="2">
                <button
                  type="button"
                  class='btn btn-try'
                  @click='$emit("toggleElems", name +  "Inputs")'
                >
                  Versuchen
                </button>
              </th>
          </tfoot>
      </table>
  </div>
</template>
<script>
import InputAnswer from '@/components/InputAnswer.vue';

export default {
  name: 'TenseTable',
  components: {
    InputAnswer,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    pronouns: {
      type: Array,
      required: true,
    },
    // окончания нужного времени
    endings: {
      type: Array,
      required: true,
    },
    // спрягаемые слова без окончаний
    conjugatedWords: {
      type: Array,
      required: false,
      default: () => [],
    },
    // показывать ли тело таблицы, клик по zeigen/verstecken
    showContent: {
      type: Boolean,
      required: true,
    },
    // показывать ли инпуты, клик по versuchen
    showInputs: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      totalTable: [],
    };
  },
  created() {
    this.getConjugatedWords();
  },
  methods: {
    // склеивает в один массив - местоимения, окончания, спрягающиеся слова без окончаний
    getConjugatedWords() {
      this.totalTable = this.pronouns;
      // const totalTable = this.pronouns;
      this.totalTable.forEach((item, index) => {
        if (this.conjugatedWords.length) {
          console.log('this.conjugatedWords.length: ', this.conjugatedWords.length);
          item.singular.word = this.conjugatedWords[index].singular;
          item.plural.word = this.conjugatedWords[index].plural;
        }
        item.singular.ending = this.endings[index].singular;
        item.plural.ending = this.endings[index].plural;
      });
      // console.log('totalTable: ', totalTable);
      // return totalTable;
    },
  },
};
</script>
