<template>
  <div
    class='edit-info'
  >
    <img
      src='@/assets/cross.png'
      class='icon close-icon'
      @click="closeEdit"
    >
    <b class='edit-info__title' :class="editTypeClass">
      {{ editTypeTitle }}
    </b>
    <div class='edit-info__column edit-info__column--date'>
      <b class='edit-info__title'>Дата занятия</b>
      <input
        type='date'
        class='edit-info__input'
        v-model="editedLesson.date"
      >
    </div>
    <div class='edit-info__column edit-info__column--time'>
      <b class='edit-info__title'>Длительность</b>
      <div class='edit-info__line'>
          <input
          type='number'
          class='edit-info__input edit-info__input--number'
          v-model="editedLesson.hours"
        >
        <span class='edit-info__measurement'>часов</span>
      </div>
      <div class='edit-info__line'>
        <input
          type='number'
          class='edit-info__input edit-info__input--number'
          v-model="editedLesson.minutes"
        >
        <span class='edit-info__measurement'>минут</span>
      </div>
    </div>
    <div class='edit-info__column edit-info__column--comment'>
      <b class='edit-info__title'>Комментарий</b>
      <textarea
        class='edit-info__comment-text'
        v-model="editedLesson.comment"
      />
    </div>
    <button
      class='btn edit-info__btn'
      @click="saveEditInfo"
    >
    Сохранить
    </button>
  </div>
</template>

<script>
// * данный компонент
// * 1) сохраняет отредактированную информацию в виде объекта и уведомляет об этом родителя
// * 2) сохраняет историю изменений для таблицы HistoryTable
import saveInfo from '@/helpers/saveInfo';
import getSavedInfo from '@/helpers/getSavedInfo';

export default {
  name: 'LessonEditInfo',
  props: {
    editTypeTitle: {
      type: String,
      default: 'Lesson edit info',
    },
    editTypeClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editedLesson: {
        month: null,
        date: '',
        hours: 0,
        minutes: 30,
        time: 0,
        comment: '',
      },
      doneArray: [],
      missedArray: [],
    };
  },
  created() {
    this.doneArray = getSavedInfo('lesson-edit-info-history--done') || [];
    this.missedArray = getSavedInfo('lesson-edit-info-history--missed') || [];
  },
  methods: {
    closeEdit() {
      this.$emit('close-edit');
    },
    saveEditInfo() {
      // * time - общее время в минутах
      this.editedLesson.time = this.editedLesson.hours * 60 + Number(this.editedLesson.minutes);
      this.editedLesson.month = new Date(this.editedLesson.month).getMonth();
      if (this.editTypeClass === 'done') {
        this.doneArray.push(this.editedLesson);
        saveInfo('lesson-edit-info--done', this.editedLesson);
        saveInfo('lesson-edit-info-history--done', this.doneArray);
      } else {
        this.missedArray.push(this.editedLesson);
        saveInfo('lesson-edit-info--missed', this.editedLesson);
        saveInfo('lesson-edit-info-history--missed', this.missedArray);
      }

      this.$emit('update-edit-info', this.editTypeClass);
    },
  },
};
</script>
