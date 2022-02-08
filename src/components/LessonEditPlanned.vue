<template>
  <div
    class='edit-plan'
  >
    <img
      src='@/assets/cross.png'
      class='icon close-icon'
      @click="closeEditPlan"
    >
      <b class='edit-plan__title'>Запланировано на
        <span class='edit-plan__month'>{{ month }}</span>
      </b>
      <div class='edit-plan__line edit-plan__line--hours'>
        <input
          type='number'
          class='edit-plan__input'
          v-model="editPlan.hours"
        >
        <span>часов</span>
      </div>
      <div class='edit-plan__line edit-plan__line--minutes'>
        <input
          type='number'
          class='edit-plan__input'
          v-model="editPlan.minutes"
        >
        <span>минут</span>
      </div>
      <button
        class='btn edit-plan__btn'
        @click="saveEditPlan"
      >
        Сохранить
      </button>
  </div>
</template>

<script>
export default {
  name: 'LessonEditPlanned',
  props: {
    month: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editPlan: {
        hours: '',
        minutes: '',
      },
    };
  },
  methods: {
    closeEditPlan() {
      this.$emit('close-edit-plan');
    },
    saveEditPlan() {
      const plannedMinutes = Number(this.editPlan.hours) * 60
          + Number(this.editPlan.minutes);
      this.$emit('save-edit-plan', plannedMinutes);
    },
  },
};
</script>
