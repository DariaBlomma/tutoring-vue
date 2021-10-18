<template>
  <div class='page essen'>
    <router-link class='go-back' :to="{name: 'horizonte-6'}">Zurück</router-link>
    <h1 class='primary-title centered'>Das Essen Еда</h1>
        <table class='table'>
            <tr>
                <th>Das esse ich gerne</th>
                <th>Das esse ich nicht so gerne</th>
                <th>Das mag ich überhaupt nicht</th>
            </tr>
            <tr
              v-for='(item, i) in eatingTableRows'
              :key='i'
            >
              <td class='gerne'>
                <input
                  class='eating-input'
                  v-model="item.gerne"
                  type="text"
                  @change='saveInfo'></td>
              <td class='nicht-gerne'>
                <input
                  class='eating-input'
                  v-model="item.nichtGerne"
                  type="text"
                  @change='saveInfo'></td>
              <td class='nicht'>
                <input
                  class='eating-input'
                  v-model="item.nicht"
                  type="text"
                  @change='saveInfo'></td>
            </tr>
        </table>
        <button
          class='btn add-row'
          @click='addRow'
        >+
        </button>

        <div class='present'>
            <h2>Presens Настоящее время</h2>
            <table class='table'>
                <tbody class='pronouns no-inputs'>
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
            <h3>Machen Делать</h3>
            <table class='present-tense'>
                <tbody class='machen no-inputs'>
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
export default {
  name: 'Essen',
  data() {
    return {
      eatingTableRows: [],
    };
  },
  created() {
    const saved = JSON.parse(localStorage.getItem('eating-table'));
    if (saved) {
      this.eatingTableRows = saved;
    }
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
  },
};
</script>
