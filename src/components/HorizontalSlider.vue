<template>
    <div class='horizontal-slider'>
    <img
      src='~@/assets/prev.png'
      class='control-arrow control-arrow--prev'
      @click="getPrevSlide"
    >
    <div
      class='horizontal-slider__slide-wrapper'
      v-for="(month, index) in slides"
      :key="index"
    >
      <div
        class='horizontal-slider__slide'
        v-if="handMode
          ? chosenIndex === index
          : index === currentMonth"
      >
      {{ month }}
      </div>
    </div>
    <img
      src='~@/assets/next.png'
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
  },
  data() {
    return {
      chosenIndex: 0,
      // * ручной режим переключения слайдера
      handMode: false,
    };
  },
  computed: {
    currentMonth() {
      return new Date().getMonth();
    },
    getHandModeDuration() {
      // * первые 60 - минуты, вторые 60 - секунды, 1000 - миллисекунды
      return this.handModeHours * 60 * 60 * 1000;
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
