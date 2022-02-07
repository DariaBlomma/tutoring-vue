<template>
  <div
    class='history-info'
  >
    <img
      src='@/assets/cross.png'
      class='icon close-icon'
      @click="closeHistory"
    >
    <h3 class='history-info__block-title light'>История изменений</h3>
    <div class='histoty-info__column history-info__column--done'>
      <b class='history-info__title done'>
        Проведенные занятия
      </b>
      <div class='history-info__line history-info__line--date'>
      <HistoryTable :array="doneInfoArray"/>
    </div>
    </div>
    <div class='histoty-info__column history-info__column--missed'>
      <b class='history-info__title missed'>
        Пропущенные занятия
      </b>
      <HistoryTable :array="missedInfoArray"/>
    </div>
  </div>
</template>

<script>
import HistoryTable from '@/components/HistoryTable.vue';
import getSavedInfo from '@/helpers/getSavedInfo';

export default {
  name: 'HistoryUpdateInfo',
  components: {
    HistoryTable,
  },
  data() {
    return {
      doneInfoArray: [],
      missedInfoArray: [],
    };
  },
  created() {
    this.doneInfoArray = getSavedInfo('lesson-edit-info-history--done') || [];
    this.missedInfoArray = getSavedInfo('lesson-edit-info-history--missed') || [];
  },
  methods: {
    closeHistory() {
      this.$emit('close-history');
    },
  },
};
</script>
