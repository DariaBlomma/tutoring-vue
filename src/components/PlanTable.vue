<template>
  <table class='table plan-table' :id='tableId'>
    <tr>
      <th></th>
      <th class='th-light'>Вторник</th>
      <th class='th-light'>Четверг</th>
      <th class='th-light'>Суббота</th>
      <th class='th-light'>Воскресенье</th>
    </tr>
    <tr
      v-for="item in tableArray"
      :key="item"
    >
      <td></td>
      <td
        v-for="day in item"
        :key="day"
        class='row-item plan-table__row-item'
      >
        <div
          v-if="day.date"
          class='plan-table__date-goal'
        >
        Дз на {{ day.date }}
        </div>
        <div
          v-if="day.time"
          class='plan-table__time-goal'
        >
        Планируемое время: {{ day.time }}
        </div>
        <div
          v-if="Object.keys(day).length > 0"
          :class="['plan-list', {'plan-actual': day.actual}]"
        >
          <ol class='list-type-colored'>
            <li
              v-for="elem in day.list"
              :key="elem"
              :class="['plan-list__item', elem[1]]"
            >
            {{ elem[0] }}
            </li>
          </ol>
          <ul v-if="day.links">
            <h4 class='title-4'>Links</h4>
            <li
                v-for="link in day.links"
                :key="link.address"
            >
              <a
                :href="link.address"
                class='link'
              >
                {{ link.title }}
              </a>
            </li>
          </ul>
          <div
            v-if="day.addInfo"
            v-html="day.addInfo"
            class='add-info'
          >
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'PlanTable',
  props: {
    tableId: {
      type: String,
      default: 'plan_table',
    },
    tableArray: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
