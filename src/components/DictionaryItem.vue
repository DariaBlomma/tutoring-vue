<template>
  <div
    class='dictionary__item'
    v-for='(item, i) in dictionary'
    :class='item.class'
    :key='i'
  >
      <h3 v-if='item.title' class='title-3-absolute'>{{item.title}}</h3>
      <div class='dates'>
        <span class='dates__title'>Done:</span>
        <ol class='dates__list'>
          <li class='dates__line'>
            <input
              type='date'
              :value='doneDates[item.title] || ""'
              @change='saveDate(item.title, $event)'
            >
          </li>
        </ol>
        <button class='btn add'>+</button>
      </div>
      <input
          v-if='item.answer'
          type='text'
          class='input dictionary__input title-3 ex-10'
          placeholder='Write the topic name'
          :data-answer='item.answer'
      >
      <div class='dictionary__item-inner'>
        <ol class='list-type-colored en'>
            <li
              class='dictionary__line dictionary__line_en'
              :class='elem[1]'
              v-for='elem in item.en'
              :key='elem[0]'
            >
            <span>
              {{elem[0]}}
            </span>
            </li>
        </ol>
        <ul v-if='item.ru' class='ru'>
            <li
              class='dictionary__line'
              :class='elem[1]'
              v-for='elem in item.ru'
              :key='elem[0]'
            >
            <span>
              {{elem[0]}}
            </span>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
import saveInfo from '@/helpers/saveInfo';
import getSavedInfo from '@/helpers/getSavedInfo';

export default {
  name: 'DictionaryItem',
  props: {
    dictionary: {
      type: Array,
      required: true,
    },
    doneDate: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      doneDates: {},
    };
  },
  created() {
    this.doneDates = getSavedInfo('done-dates') || {};
  },
  methods: {
    saveDate(name, { target: { value } }) {
      this.doneDates[name] = value;
      saveInfo('done-dates', this.doneDates);
    },
  },
};
</script>
