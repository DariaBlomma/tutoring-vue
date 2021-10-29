<template>
  <div>
    <h3>Table test</h3>
    <span>name: {{name}}</span> <br>
    <span>conjugatedBase: {{conjugatedBase}}</span> <br>
    <span>pronouns: {{pronouns}}</span> <br>
    <span>endings: {{endings}}</span>
          <table class='table'>
          <tbody
            class='pronouns'
          >
            <tr
              v-for='(item, i) in totalTable'
              :key='i'
            >
              <th>{{item.singular.pronoun}}</th>
              <td>
                <span>
                  <slot name='sing-word'>{{conjugatedBase}}</slot>
                  <slot name='sing-ending'><b>{{item.singular.ending}}</b></slot>
                </span>
                </td>
              <th>{{item.plural.pronoun}}</th>
              <td>
                <span >
                  <slot name='plural-word'>{{conjugatedBase}}</slot>
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
export default {
  name: 'Table',
  props: {
    name: {
      type: String,
      required: true,
    },
    conjugatedBase: {
      type: String,
      required: false,
    },
    pronouns: {
      type: Array,
      required: false,
    },
    // окончания нужного времени
    endings: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      totalTable: [],
    };
  },
  created() {
    // console.log('created');
    // console.log(this.name);
    this.getConjugatedWords();
  },
  methods: {
    getConjugatedWords() {
      this.totalTable = this.pronouns;
      // console.log('this.totalTable: ', this.totalTable);
      // console.log('this.conjugatedWords: ', this.conjugatedWords.length);
      // const totalTable = this.pronouns;
      this.totalTable.forEach((item, index) => {
        // console.log('this.conjugatedWords.length: before', this.conjugatedWords.length);
        // console.log('name', this.name);

        item.singular.ending = this.endings[index].singular;
        item.plural.ending = this.endings[index].plural;
      });
      // console.log('totalTable: ', this.totalTable);
      // return totalTable;
    },
  },
};
</script>
