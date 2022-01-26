<template>
    <div class='horizontal-slider' :class="`horizontal-slider--${status}`">
    <img
      v-if="showArrows"
      :src="require(`../assets/prev-${status}.png`)"
      class='control-arrow control-arrow--prev'
      @click="getPrevSlide"
    >
    <div
      class='horizontal-slider__slide-wrapper'
      v-for="(slide, index) in slides"
      :key="index"
    >
      <div
        class='horizontal-slider__slide'
        v-if="handMode
          ? chosenIndex === index
          : (dateType === 'month'
              ?  index === currentDate
              : slide === currentDate
            )"
      >
      {{ slide }}
      </div>
    </div>
    <img
      v-if="showArrows"
      :src="require(`../assets/next-${status}.png`)"
      class='control-arrow control-arrow--next'
      @click="getNextSlide"
    >
  </div>
</template>

<script>
export default {
  name: 'HorizontalSlider',
  props: {
    slides: {
      type: Array,
      required: true,
    },
    // * кол-во часов, через которое ручной режим сбросится и будет показан актуальный месяц
    handModeHours: {
      type: Number,
      default: 5,
    },
    // * для задания цвета слайдера, если на странице таких блоков несколько
    status: {
      type: String,
      default: 'common',
    },
    // * для автоматического режима, с каким параметром даты актуализировать
    dateType: {
      type: String,
      default: 'month',
    },
  },
  data() {
    return {
      chosenIndex: 0,
      // * ручной режим переключения слайдера
      handMode: false,
    };
  },
  computed: {
    currentDate() {
      let currentDate;
      if (this.dateType === 'month') {
        currentDate = new Date().getMonth();
      }
      if (this.dateType === 'year') {
        currentDate = new Date().getFullYear();
      }
      return currentDate;
    },
    getHandModeDuration() {
      // * первые 60 - минуты, вторые 60 - секунды, 1000 - миллисекунды
      return this.handModeHours * 60 * 60 * 1000;
    },
    showArrows() {
      return this.slides.length > 1;
    },
  },
  methods: {
    clearHandMode() {
      setTimeout(() => {
        this.handMode = false;
      }, this.getHandModeDuration);
    },
    getNextSlide() {
      this.handMode = true;
      if (this.chosenIndex === this.slides.length - 1) {
        this.chosenIndex = 0;
      } else {
        this.chosenIndex++;
      }
    },
    getPrevSlide() {
      this.handMode = true;
      if (this.chosenIndex === 0) {
        this.chosenIndex = this.slides.length - 1;
      } else {
        this.chosenIndex--;
      }
    },
  },
};
</script>
