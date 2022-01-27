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
      <tr class='history-info__line'>
        <td class='history-info__value'>{{ data.date }}</td>
        <td class='history-info__value'>{{ data.time }}</td>
        <td class='history-info__value'>{{ data.comment }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'HistoryTable',
  props: {
    data: {
      type: Object,
      default: () => ({
        date: '',
        time: '',
        comment: '',
      }),
    },
  },
};
</script>
