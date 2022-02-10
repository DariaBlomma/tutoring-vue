<template>
  <table class='table history-info__table'>
    <thead>
      <tr>
        <th class='history-info__title'>Дата занятия</th>
        <th class='history-info__title'>Длительность (в часах)</th>
        <th class='history-info__title'>Комментарий</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="data in array"
        :key="data.date"
        class='history-info__line'
      >
      <!-- выводим историю только для выбранного месяца -->
        <template v-if="data.month === month">
          <td class='history-info__value'>{{ new Date(data.date).toLocaleDateString('ru') }}</td>
          <td class='history-info__value'>{{ `${data.hours} часов ${data.minutes} минут` }}</td>
          <td class='history-info__value'>{{ data.comment }}</td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'HistoryTable',
  props: {
    array: {
      type: Array,
      /*
      [{
        month: null,
        date: '',
        hours: '',
        minutes: '',
        time: '',
        comment: '',
      }] */
      default: () => [],
    },
    month: {
      type: Number,
      default: new Date().getMonth(),
    },
  },
};
</script>
