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
        right='-80'
        :top=0
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
      <!-- todo:
      1. Визуальное оформление
      2. Названия переменных, методов
      3. isRightAnswer/wrong сократить до 1 переменной
      4. Названия стилей
      5. Если следующий ответ неправильный,
        то подсвечивается предыдущее русское предложение, а не актуальное
      6. Отсортировать массив немецких карточек, чтобы они не шли сразу в верном порядке
      -->
      <!--
        Обзор реализации:
          1. Массив строк с русскими полными предложениями ruSentences
          2. Массив объектов dragCards с карточками для перетаскивания на немецком
            с ключами
              name - сама фраза на немецком,
              sentence - номер предложения (в соответствии с массивом ruSentences),
              answerOrder - нужный порядок слова в предложении ( для проверки ответа)
          3. Пустой (изначально) массив answerCards для ответов ученика.
            В Draggable запомлняется с теми же ключами, что и dragCards, но имеет другие стили.
          4. Строка ответа ученика с кнопкой Проверить.
            Всегда 1 шт
          5. Правильно собранные предложения через 2 секунды выводятся под русскими предложениями,
            а массив ответов и некторые другие данные обнуляются.
      -->
      <h2 class='secondary-title centered'>Mach Sätze!</h2>
        <ol class='ru-sentences'>
          <li
            :class='["ru-sentences__line",
              {
                "right": index === answerLines - 1 && isRightAnswer,
                "wrong": index === answerLines - 1 && isWrongAnswer
              }]'
            v-for='(item, index) in ruSentences'
            :key='item'
          >
            {{item}}
            <div
              class='done-answer-line'
              v-if='index <= answerLines - 1'
            >
            {{rightAnswerLines[index]}}
            </div>
          </li>
        </ol>
        <Draggable
          :list='dragCards'
          item-key='getUniqueKey(name, sentence, answerOrder)'
          class='to-drag-box'
          group='essen'
        >
          <template #item="{element}">
            <div
              class='card to-drag-box__card'
            >
              {{element.name}}
            </div>
          </template>
        </Draggable>
        <div class='result-output'>
          <ol>
              <li
                class='result-output__line'
              >
              <Draggable
                class='result-output__sentence-wrapper'
                group='essen'
                :list='answerCards'
                item-key='getUniqueKey(name, sentence, answerOrder)'
              >
                <template #item="{element}">
                  <div
                    :class='["card", "result-output__card",
                      {"right": isRightAnswer, "wrong": isWrongAnswer}]'
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
              Prüfen
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
        { name: 'Zum Mittagessen', sentence: 4, answerOrder: 1 },
        { name: 'esse', sentence: 4, answerOrder: 2 },
        { name: 'ich', sentence: 4, answerOrder: 3 },
        { name: 'gerne', sentence: 4, answerOrder: 4 },
        { name: 'Fleisch', sentence: 4, answerOrder: 5 },
        { name: 'mit', sentence: 4, answerOrder: 6 },
        { name: 'Kartoffeln', sentence: 4, answerOrder: 7 },
        { name: 'oder', sentence: 4, answerOrder: 8 },
        { name: 'Suppe.', sentence: 4, answerOrder: 9 },
        { name: 'Meine', sentence: 5, answerOrder: 1 },
        { name: 'Mutter', sentence: 5, answerOrder: 2 },
        { name: 'kocht', sentence: 5, answerOrder: 3 },
        { name: 'gerne.', sentence: 5, answerOrder: 4 },
        { name: 'Meine', sentence: 6, answerOrder: 1 },
        { name: 'Mutter', sentence: 6, answerOrder: 2 },
        { name: 'mag', sentence: 6, answerOrder: 3 },
        { name: 'Reis,', sentence: 6, answerOrder: 4 },
        { name: 'Nudeln', sentence: 6, answerOrder: 5 },
        { name: 'mit', sentence: 6, answerOrder: 6 },
        { name: 'Gemüse', sentence: 6, answerOrder: 7 },
        { name: 'und', sentence: 6, answerOrder: 8 },
        { name: 'Torten.', sentence: 6, answerOrder: 9 },
      ],
      ruSentences: [
        'На завтрак у нас есть хлеб с вареньем или мюсли',
        'Я ем охотнее всего мюсли, моему брату больше нравится хлеб с вареньем.',
        'Я пью одну чашку чая или две.',
        'На обед я ем охотно мясо с картофелем или суп',
        'Моя мама готовит с удовольствием(охотно)',
        'Моей маме нравится рис, лапша с овощами и торты',
      ],
      // для пробы
      // dragCards: [
      //   { name: 'Zum Früstuck 1-1', sentence: 1, answerOrder: 1 },
      //   { name: 'Zum Früstuck 1-2', sentence: 1, answerOrder: 2 },
      //   { name: 'Zum Früstuck 2-1', sentence: 2, answerOrder: 1 },
      //   { name: 'Zum Früstuck 2-2', sentence: 2, answerOrder: 2 },
      //   { name: 'Zum Früstuck 2-3', sentence: 2, answerOrder: 3 },
      // ],
      answerCards: [],
      answerLines: 0,
      isRightAnswer: false,
      isWrongAnswer: false,
      originalAnswerSentenceLength: 0,
      sentenceCorrect: false,
      rightAnswerLines: [],
      rightAnswerLine: '',
    };
  },
  created() {
    this.getSavedInfo();
    this.getOriginalAnswerSentenceLength();
    this.dragCards.sort((a, b) => (a.name > b.name ? 1 : -1));
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
    getOriginalAnswerSentenceLength() {
      this.originalAnswerSentenceLength = this.getAnswerSentenceLength();
    },
    getAnswerSentenceLength() {
      return this.dragCards.reduce((acc, item) => {
        if (item.sentence === this.answerLines + 1) {
          console.log('this.answerLines + 1: ', this.answerLines + 1);
          console.log('item.sentence: ', item.sentence);
          console.log('item.name: ', item.name);
          acc++;
        }

        return acc;
      }, 0);
    },
    getRightAnswerLines(name) {
      this.rightAnswerLine += `${name} `;
    },
    showRightAnswerLine(elemIndex, sentenceOrder) {
      return elemIndex === sentenceOrder;
    },
    checkDraggedAnswer() {
      if (this.hasAnswers) {
        this.answerCards.forEach((item, index) => {
          // console.log('this.answerCards.length === originalLegth: ',
          //   this.answerCards.length === this.originalAnswerSentenceLength);
          // console.log('this.answerCards.length: ', this.answerCards.length);
          // console.log('originalLegth: ', this.originalAnswerSentenceLength);
          if (this.answerCards.length === this.originalAnswerSentenceLength
              && index === item.answerOrder - 1) {
            this.isWrongAnswer = false;
            this.isRightAnswer = true;
            this.sentenceCorrect = true;
            this.getRightAnswerLines(item.name);
            // this.showRightAnswerLine(item.sentence);
            // console.log('this.sentenceCorrect in loop: ', this.sentenceCorrect);
            // console.log('this.anwerLines in loop: ', this.answerLines);
          } else {
            // console.log('item.answerOrder: ', item.answerOrder - 1);
            // console.log('index: ', index);
            this.sentenceCorrect = false;
            this.isRightAnswer = false;
            this.isWrongAnswer = true;
          }
        });
        this.addAnswerLine();
      }
    },
    addAnswerLine() {
      // console.log('this.sentenceCorrect in Add: ', this.sentenceCorrect);
      // console.log('this.anwerLines before Add: ', this.answerLines);
      if (this.sentenceCorrect) {
        this.rightAnswerLines.push(this.rightAnswerLine);
        this.answerLines++;
        setTimeout(() => {
          this.isRightAnswer = false;
          this.isWrongAnswer = false;
          this.answerCards = [];
          this.rightAnswerLine = '';
          this.getOriginalAnswerSentenceLength();
        }, 2000);

        // this.sentenceCorrect = false;
        // console.log('this.anwerLines after Add: ', this.answerLines);
      }
    },
  },
};
</script>
