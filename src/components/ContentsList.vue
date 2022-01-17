<template>
    <ol class='contents-list'>
      <li
        v-for="line in contentsList"
        :key="line.moveTo"
        class='contents-list__line'
      >
        <a :href='`#${line.moveTo}`' class='link'>{{ line.title }}</a>
        <ol v-if="line.sublist">
          <li
            v-for="subline in line.sublist"
            :key="subline.moveTo"
            class='contents-list__line'
          >
            <a :href='`#${subline.moveTo}`'>
              <span class='contents-list__unique-number'>{{ subline.uniqueNumber + " " }}</span>
              <span class='contents-list__topic'>{{ subline.title }}</span>
            </a>
          </li>
          <!--
          <li class='contents-list__line'>
            <a href='#n1-176'>
              <span class='contents-list__unique-number'>№1: 176 </span>
              <span class='contents-list__topic'>Listening about work</span>
            </a>
          </li> -->
        </ol>
      </li>
    </ol>
</template>

<script>
export default {
  name: 'ContentsList',
  props: {
    contentsList: {
      type: Array,
      required: true,
    },
  },
};
</script>
