<template>
  <div class='page lesson essen'>
    <header>
      <router-link class='go-back has-tooltip' :to="{name: 'horizonte-6'}">
        Zurück
        <Tooltip
          v-if="toggledElems.tooltips"
          text="Назад"
        />
      </router-link>
      <button class='btn show-tooltips'  @click='toggleElems("tooltips")'>Übersetzen</button>
    </header>
    <h1 class='primary-title centered has-tooltip'>
      Das Essen
      <Tooltip
        v-if="toggledElems.tooltips"
        text="Еда"
        :top=-35
      />
    </h1>
    <table class='table'>
        <tr>
            <th>
              <span class='has-tooltip'>
                Das
                <Tooltip
                  v-if='toggledElems.tooltips'
                  text='Это'
                />
              </span>
              esse ich
              <span class='has-tooltip'>
                gerne
                <Tooltip
                  v-if='toggledElems.tooltips'
                  text="Охотно"
                />
              </span>
            </th>
            <th>Das esse ich nicht so gerne</th>
            <th>Das mag ich
              <span class='has-tooltip'>
                überhaupt nicht
                <Tooltip
                  v-if="toggledElems.tooltips"
                  text="Вообще нет"
                />
              </span>
            </th>
        </tr>
        <tr
          v-for='(item, i) in eatingTableRows'
          :key='i'
        >
          <td class='gerne'>
            <input
              type="text"
              class='eating-input'
              v-model="item.gerne"
              @change='saveInfo'>
          </td>
          <td class='nicht-gerne'>
            <input
              type="text"
              class='eating-input'
              v-model="item.nichtGerne"
              @change='saveInfo'>
          </td>
          <td class='nicht'>
            <input
              type="text"
              class='eating-input'
              v-model="item.nicht"
              @change='saveInfo'>
          </td>
        </tr>
    </table>
    <button
      class='btn add-row'
      @click='addRow'
    >+
    </button>
    <div class='present'>
      <!-- presens endings -->
        <TenseTable
          name='presensEndingsTable'
          class='root-tense-table'
          :pronounsDE='pronounsDE'
          :pronounsRU='pronounsRU'
          :endings='presensEndings'
          :showContent='toggledElems.presensEndingsTableContent'
          :showInputs='toggledElems.presensEndingsTableInputs'
          :showTooltips='toggledElems.tooltips'
          @toggleElems='toggleElems($event)'
        >
          <h2 class='secondary-heading has-tooltip'>
            Presens
            <Tooltip
              v-if="toggledElems.tooltips"
              text="Настоящее время"
              right='auto'
            />
          </h2>
        </TenseTable>
        <!-- machen -->
        <TenseTable
          name='machenTable'
          :pronounsDE='pronounsDE'
          :pronounsRU='pronounsRU'
          :endings='presensEndings'
          conjugatedBase='mach'
          :showContent='toggledElems.machenTableContent'
          :showInputs='toggledElems.machenTableInputs'
          :showTooltips='toggledElems.tooltips'
          @toggleElems='toggleElems($event)'
        >
          <h3 class='has-tooltip'>
            Machen
            <Tooltip
              v-if="toggledElems.tooltips"
              text="Делать"
              right='auto'
            />
          </h3>
        </TenseTable>
        <!-- essen -->
        <TenseTable
          name='essenTable'
          :pronounsDE='pronounsDE'
          :pronounsRU='pronounsRU'
          :endings='presensEndings'
          conjugatedBase='ess'
          :exceptions='essenExceptions'
          :showContent='toggledElems.essenTableContent'
          :showInputs='toggledElems.essenTableInputs'
          :showTooltips='toggledElems.tooltips'
          @toggleElems='toggleElems($event)'
        >
          <h3 class='has-tooltip'>
            Essen
            <Tooltip
              v-if="toggledElems.tooltips"
              text="Есть, кушать"
              right='auto'
            />
          </h3>
          <span class='short-rule'>e -> i</span>
          <template v-slot:Du-base>
            <span><span class='important-letter'>i</span>ss</span>
          </template>
          <template v-slot:Du-ending>
            <b class='important-ending'>t</b>
          </template>
          <template v-slot:Er-base>
            <span><span class='important-letter'>i</span>ss</span>
          </template>
        </TenseTable>
        <!-- mögen -->
        <TenseTable
          name='mogenTable'
          :pronounsDE='pronounsDE'
          :pronounsRU='pronounsRU'
          :endings='presensEndings'
          conjugatedBase='mög'
          :exceptions='mogenExceptions'
          :showContent='toggledElems.mogenTableContent'
          :showInputs='toggledElems.mogenTableInputs'
          :showTooltips='toggledElems.tooltips'
          @toggleElems='toggleElems($event)'
        >
          <h3 class='has-tooltip'>
            Mögen
            <Tooltip
              v-if="toggledElems.tooltips"
              text="Любить, нравиться"
              right='auto'
            />
          </h3>
          <template v-slot:Ich-base>
            <span><span class='important-letter'>mag</span></span>
          </template>
          <template v-slot:Ich-ending>
            <span></span>
          </template>
          <template v-slot:Du-base>
            <span><span class='important-letter'>mag</span></span>
          </template>
          <template v-slot:Er-base>
            <span><span class='important-letter'>mag</span></span>
          </template>
          <template v-slot:Er-ending>
            <span></span>
          </template>
        </TenseTable>

    </div>
    <div class='drag-and-drop'>
        <ol class='ru-text'>
          <li
            :class='["ru-text__item",
              {
                "right": index === answerLines - 1 && isRightAnswer,
                "wrong": index === answerLines - 1 && isWrongAnswer
              }]'
            v-for='(item, index) in ruSentences'
            :key='item'
          >
            {{item}}
          </li>
        </ol>
          <Draggable
            :list='dragCards'
            item-key='getUniqueKey(name, sentence, answerOrder)'
            class='box'
            group='essen'
          >
            <template #item="{element}">
              <div
                class='box__item'
              >
                {{element.name}}
              </div>
            </template>
          </Draggable>
          <div class='result'>
          <ol>
              <li
                class='result__sentence'
                v-for='(line, index) in answerLines'
                :key='index'
              >
              <Draggable
                class='result__line'
                group='essen'
                :list='answerCards'
                item-key='name'
              >
                <template #item="{element}">
                  <div
                    :class='["result__item", {"right": isRightAnswer, "wrong": isWrongAnswer}]'
                  >
                  {{element.name}}
                  </div>
                </template>
              </Draggable>
              <button
                class='btn check'
                @click='checkDraggedAnswer'
                :disabled='!hasAnswers'
              >
              Check
              </button>
            </li>
          </ol>
        </div>
    </div>
  </div>
</template>
<script>
import Draggable from 'vuedraggable';
import Tooltip from '@/components/Tooltip.vue';
import TenseTable from '@/components/TenseTable.vue';

// ü ö ä ß Ü Ö Ä
export default {
  name: 'Essen',
  components: {
    Tooltip,
    TenseTable,
    Draggable,
  },
  data() {
    return {
      eatingTableRows: [],
      presensTableShown: true,
      toggledElems: {
        tooltips: false,
        presensEndingsTableContent: true,
        presensEndingsTableInputs: false,
        machenTableContent: true,
        machenTableInputs: false,
        essenTableContent: true,
        essenTableInputs: false,
        mogenTableContent: true,
        mogenTableInputs: false,
      },
      pronounsDE: [
        {
          singular: {
            pronoun: 'Ich',
          },
          plural: {
            pronoun: 'Wir',
          },
        },
        {
          singular: {
            pronoun: 'Du',
          },
          plural: {
            pronoun: 'Ihr',
          },
        },
        {
          singular: {
            pronoun: 'Er/Sie/Es',
          },
          plural: {
            pronoun: 'Sie/sie',
          },
        },
      ],
      pronounsRU: [
        {
          singular: {
            pronoun: 'Я',
          },
          plural: {
            pronoun: 'Мы',
          },
        },
        {
          singular: {
            pronoun: 'Ты',
          },
          plural: {
            pronoun: 'Вы (мн.ч)',
          },
        },
        {
          singular: {
            pronoun: 'Он/Она/Оно',
          },
          plural: {
            pronoun: 'Вы (вежливое)/они',
          },
        },
      ],
      presensEndings: [
        {
          singular: 'e',
          plural: 'en',
        },
        {
          singular: 'st',
          plural: 't',
        },
        {
          singular: 't',
          plural: 'en',
        },
      ],
      essenExceptions: [
        ['isst', 'Du-word'],
        ['isst', 'Er-word'],
      ],
      mogenExceptions: [
        ['mag', 'Ich-word'],
        ['magst', 'Du-word'],
        ['mag', 'Er-word'],
      ],
      dragCards: [
        { name: 'Zum Früstuck', sentence: 1, answerOrder: 1 },
        { name: "gibt's bei uns", sentence: 1, answerOrder: 2 },
        { name: 'Brot', sentence: 1, answerOrder: 3 },
        { name: 'mit', sentence: 1, answerOrder: 4 },
        { name: 'Marmelade', sentence: 1, answerOrder: 5 },
        { name: 'und', sentence: 1, answerOrder: 6 },
        { name: 'Müslii.', sentence: 1, answerOrder: 7 },
        { name: 'Ich', sentence: 2, answerOrder: 1 },
        { name: 'esse', sentence: 2, answerOrder: 2 },
        { name: 'am liebsten', sentence: 2, answerOrder: 3 },
        { name: 'Müsli,', sentence: 2, answerOrder: 4 },
        { name: 'mein Bruder', sentence: 2, answerOrder: 5 },
        { name: 'mag', sentence: 2, answerOrder: 6 },
        { name: 'lieber', sentence: 2, answerOrder: 7 },
        { name: 'ein Marmeladenbrot.', sentence: 2, answerOrder: 8 },
        { name: 'Ich', sentence: 3, answerOrder: 1 },
        { name: 'trinke', sentence: 3, answerOrder: 2 },
        { name: 'eine Tasse', sentence: 3, answerOrder: 3 },
        { name: 'Tee', sentence: 3, answerOrder: 4 },
        { name: 'oder', sentence: 3, answerOrder: 5 },
        { name: 'zwei.', sentence: 3, answerOrder: 6 },
      ],
      ruSentences: [
        'На завтрак у нас есть хлеб с вареньем или мюсли',
        'Я ем охотнее всего мюсли, моему брату больше нравится хлеб с вареньем.',
        'Я пью одну чашку чая или две.',
      ],
      answerCards: [],
      answerLines: 1,
      isRightAnswer: false,
      isWrongAnswer: false,
      originalAnswerSentenceLength: 0,
    };
  },
  created() {
    this.getSavedInfo();
    this.originalAnswerSentenceLength = this.getAnswerSentenceLength();
  },
  computed: {
    hasAnswers() {
      return this.answerCards.length > 0;
    },
  },
  methods: {
    addRow() {
      this.eatingTableRows.push({
        gerne: '',
        nichtGerne: '',
        nicht: '',
      });
      this.saveInfo();
    },
    saveInfo() {
      localStorage.setItem('eating-table', JSON.stringify(this.eatingTableRows));
    },
    getSavedInfo() {
      const saved = JSON.parse(localStorage.getItem('eating-table'));
      if (saved) {
        this.eatingTableRows = saved;
      }
    },
    // скрывает или показывает элементы.
    // Нужно передать имя скрываемого элемента и записать его в this.toggledElems
    toggleElems(name) {
      this.toggledElems[name] = !this.toggledElems[name];
    },
    getUniqueKey(one, two, three) {
      return one + two + three;
    },
    getAnswerSentenceLength() {
      return this.dragCards.reduce((acc, item) => {
        if (item.sentence === this.answerLines) {
          acc++;
        }

        return acc;
      }, 0);
    },
    checkDraggedAnswer() {
      if (this.hasAnswers) {
        this.answerCards.forEach((item, index) => {
          console.log('this.answerCards.length === originalLegth: ', this.answerCards.length === this.originalAnswerSentenceLength);
          console.log('this.answerCards.length: ', this.answerCards.length);
          console.log('originalLegth: ', this.originalAnswerSentenceLength);
          if (this.answerCards.length === this.originalAnswerSentenceLength
              && index === item.answerOrder - 1) {
            this.isWrongAnswer = false;
            this.isRightAnswer = true;
          } else {
            console.log('item.answerOrder: ', item.answerOrder - 1);
            console.log('index: ', index);
            this.isRightAnswer = false;
            this.isWrongAnswer = true;
          }
        });
      }
    },
  },
};
</script>
