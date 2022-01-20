<template>
  <table class='table' :id='tableId'>
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
        class='row-item hw-row-item'
      >
        <span
          v-if="day.date"
          class='date-goal'
        >
        Дз на {{ day.date }}
        </span>
        <div
          v-if="Object.keys(day).length > 0"
          :class="['hw-list', {'hw-actual': day.actual}]"
        >
          <ol>
            <li
              v-for="elem in day.list"
              :key="elem"
              :class="['hw-list__item', {'hw-actual': day.actual }, elem[1]]"
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
