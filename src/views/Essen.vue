<template>
  <div class='page lesson essen'>
    <header>
      <router-link class='go-back' :to="{name: 'horizonte-6'}">Zurück</router-link>
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
        <!-- <h2 class='has-tooltip'>
          Presens
          <Tooltip
            v-if="tooltipShown"
            text="Настоящее время"
            right='auto'
          />
        </h2>
        <table class='table'>
            <tbody
              v-if='toggledElems.presensEndings'
              class='pronouns'
            >
              <tr
                v-for='(item, i) in getPresensEndings'
                :key='i'
              >
                <th>{{item.singular.pronoun}}</th>
                <td>
                  <input
                    type='text'
                    class='input'
                    v-model='item.singular.word'
                    v-if='toggledElems.presensInputs'
                  >
                  {{toggledElems.presensInputs ? '' : item.singular.word}}
                  </td>
                <th>{{item.plural.pronoun}}</th>
                <td>
                  <input
                    type='text'
                    class='input'
                    v-model='item.plural.word'
                    v-if='toggledElems.presensInputs'
                  >
                  {{toggledElems.presensInputs ? '' : item.plural.word}}
                  </td>
              </tr>
            </tbody>
            <tfoot>
                <th colspan="2">
                  <button
                    class='btn btn-toggle'
                    @click='toggleElems("presensEndings")'
                  >
                    Zeigen/verstecken
                  </button>
                </th>
                <th colspan="2">
                  <button
                    type="button"
                    class='btn btn-try'
                    @click='toggleElems("presensInputs")'
                  >
                    Versuchen
                  </button>
                </th>
            </tfoot>
        </table> -->
        <TenseTable
          name='presensEndings'
          :pronouns='pronouns'
          :endings='presensEndings'
          :showContent='toggledElems.presensEndingsTableContent'
          :showInputs='toggledElems.presensEndingsTableInputs'
          @toggleElems='toggleElems($event)'
        >
          <h2 class='has-tooltip'>
            Presens
            <Tooltip
              v-if="toggledElems.tooltips"
              text="Настоящее время"
              right='auto'
            />
          </h2>
        </TenseTable>
        <TenseTable
          name='machenTable'
          :pronouns='pronouns'
          :endings='presensEndings'
          :conjugatedWords='machenTable'
          :showContent='toggledElems.machenTableContent'
          :showInputs='toggledElems.machenTableInputs'
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

        <h3>Essen Есть, кушать</h3>
        <div>
            e -> i
        </div>

        <table class='present-tense'>
            <tbody class='essen no-inputs'>
            </tbody>
            <tfoot>
                <th colspan="2">
                  <button type="button" class='btn btn-hide'>
                    Zeigen/verstecken
                  </button>
                </th>
                <th colspan="2">
                  <button type="button" class='btn btn-try'>
                    Versuchen
                  </button>
                </th>
            </tfoot>
        </table>
            <h3>Mögen Любить, нравиться</h3>
            <table class='present-tense'>
                <tbody class='mogen no-inputs'>
                </tbody>

                <tfoot>
                    <th colspan="2">
                      <button type="button" class='btn btn-hide'>
                        Zeigen/verstecken
                      </button></th>
                    <th colspan="2">
                      <button type="button" class='btn btn-try'>
                      Versuchen
                      </button>
                    </th>
                </tfoot>
            </table>
    </div>
        <div class='drag-and-drop'>
            <div class='ru-text'> </div>
            <div class='box'>
            </div>
            <div class='result'>
            </div>
        </div>
  </div>
</template>
<script>
import Tooltip from '@/components/Tooltip.vue';
import TenseTable from '@/components/TenseTable.vue';

export default {
  name: 'Essen',
  components: {
    Tooltip,
    TenseTable,
  },
  data() {
    return {
      eatingTableRows: [],
      presensTableShown: true,
      toggledElems: {
        tooltips: false,
        // presensEndings: true,
        // presensInputs: false,
        presensEndingsTableContent: true,
        presensEndingsTableInputs: false,
        presensTable: true,
        machenTableContent: true,
        machenTableInputs: false,
      },
      pronouns: [
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
      machenTable: [
        {
          singular: 'mach',
          plural: 'mach',
        },
        {
          singular: 'mach',
          plural: 'mach',
        },
        {
          singular: 'mach',
          plural: 'mach',
        },
      ],
    };
  },
  created() {
    const saved = JSON.parse(localStorage.getItem('eating-table'));
    if (saved) {
      this.eatingTableRows = saved;
    }
  },
  computed: {
    getPresensEndings() {
      console.log(1);
      const presensEndings = this.pronouns;
      console.log('presensEndings: ', presensEndings);
      presensEndings.forEach((item, index) => {
        item.singular.word = this.presensEndings[index].singular;
        console.log('item.singular.word: ', item.singular.word);
        item.plural.word = this.presensEndings[index].plural;
      });
      return presensEndings;
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
    // скрывает или показывает элементы.
    // Нужно передать имя скрываемого элемента и записать его в this.toggledElems
    toggleElems(name) {
      if (this.toggledElems[name]) {
        this.toggledElems[name] = false;
      } else {
        this.toggledElems[name] = true;
      }
    },
  },
};
</script>
