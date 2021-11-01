<template>
  <div class='table-wrapper'>
    <slot>
      <!-- заголовок -->
    </slot>
      <table class='table tense-table'>
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
                  :word='conjugatedBase'
                  :ending='item.singular.ending'
                />
                <!-- если слово спрягается по особенному,
                можно передать в слот  форму
                с нужной выделенной жирным частью -->
                <span v-if='!showInputs'>
                  <slot
                    :name='getSlotName(item.singular.pronoun, "base")'
                  >
                    {{conjugatedBase}}
                  </slot>
                  <slot
                    :name='getSlotName(item.singular.pronoun, "ending")'
                  >
                    <b>{{item.singular.ending}}</b>
                  </slot>
                </span>
                </td>
              <th>{{item.plural.pronoun}}</th>
              <td>
                <InputAnswer
                  v-if='showInputs'
                  :word='conjugatedBase'
                  :ending='item.plural.ending'
                />
                <span v-if='!showInputs'>
                  <slot
                  :name='getSlotName(item.plural.pronoun, "base")'
                  >
                    {{conjugatedBase}}
                  </slot>
                  <slot
                  :name='getSlotName(item.plural.pronoun, "ending")'
                  >
                    <b>{{item.plural.ending}}</b>
                  </slot>
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
    // основа слова для правильных глаголов (без всяких исключений)
    conjugatedBase: {
      type: String,
      required: false,
      default: '',
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
    // склеивает в один массив - местоимения, окончания
    // основу слова сюда нельзя добавлять, иначе она добавится во все инстансы этой таблицы
    getConjugatedWords() {
      this.totalTable = this.pronouns;
      this.totalTable.forEach((item, index) => {
        item.singular.ending = this.endings[index].singular;
        item.plural.ending = this.endings[index].plural;
      });
    },
    // названия слотов, если местоимений несколько
    getSlotName(pronoun, modifier) {
      if (pronoun.includes('Er')) {
        pronoun = 'Er';
      } else if (pronoun.includes('Sie')) {
        pronoun = 'Sie';
      }
      return `${pronoun}-${modifier}`;
    },
  },
};
</script>
