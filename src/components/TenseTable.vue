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
              <th class='has-tooltip'>
                {{item.singular.pronoun}}
                <Tooltip
                  v-if="showTooltips"
                  :text="item.singular.pronounRU"
                  right='200'
                  :top=0
                  minWidth='max-content'
                />
            </th>
              <td>
                <InputAnswer
                  v-if='showInputs'
                  :pronounClass='getSlotName(item.singular.pronoun, "word")'
                  :word='conjugatedBase'
                  :ending='item.singular.ending'
                  :exceptions='exceptions'
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
              <th class='has-tooltip'>
                {{item.plural.pronoun}}
                  <Tooltip
                    v-if="showTooltips"
                    :text="item.plural.pronounRU"
                    left='190'
                    right='auto'
                    :top=0
                    minWidth='max-content'
                  />
              </th>
              <td>
                <InputAnswer
                  v-if='showInputs'
                  :pronounClass='getSlotName(item.plural.pronoun, "word")'
                  :word='conjugatedBase'
                  :ending='item.plural.ending'
                  :exceptions='exceptions'
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
                  class='btn btn-toggle has-tooltip'
                  @click='$emit("toggleElems", name + "Content")'
                >
                  Zeigen/verstecken
                    <Tooltip
                      v-if="showTooltips"
                      text="Показать/спрятать"
                      right='250'
                      :top=0
                      minWidth='max-content'
                    />
                </button>
              </th>
              <th colspan="2">
                <button
                  type="button"
                  class='btn btn-try has-tooltip'
                  @click='$emit("toggleElems", name +  "Inputs")'
                >
                  Versuchen
                    <Tooltip
                      v-if="showTooltips"
                      text="Попробовать"
                      left='170'
                      :top=0
                      minWidth='max-content'
                    />
                </button>
              </th>
          </tfoot>
      </table>
  </div>
</template>
<script>
import InputAnswer from '@/components/InputAnswer.vue';
import Tooltip from '@/components/Tooltip.vue';

export default {
  name: 'TenseTable',
  components: {
    InputAnswer,
    Tooltip,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    pronounsDE: {
      type: Array,
      required: true,
    },
    pronounsRU: {
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
    exceptions: {
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
    showTooltips: {
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
      this.totalTable = this.pronounsDE;

      this.totalTable.forEach((item, index) => {
        item.singular.ending = this.endings[index].singular;
        item.plural.ending = this.endings[index].plural;
        item.singular.pronounRU = this.pronounsRU[index].singular.pronoun;
        item.plural.pronounRU = this.pronounsRU[index].plural.pronoun;
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
