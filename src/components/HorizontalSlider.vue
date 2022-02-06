<template>
    <div class='horizontal-slider' :class="`horizontal-slider--${status}`">
    <img
      v-if="showArrows"
      :src="require(`../assets/slider/prev-${status}.png`)"
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
              ?  index === currentMonth
              : parseInt(slide) === currentYear
            )"
      >
        {{ slide }}
      </div>
    </div>
    <img
      v-if="showArrows"
      :src="require(`../assets/slider/next-${status}.png`)"
      class='control-arrow control-arrow--next'
      @click="getNextSlide"
    >
  </div>
</template>

<script>
import saveInfo from '@/helpers/saveInfo';
import getSavedInfo from '@/helpers/getSavedInfo';

export default {
  name: 'HorizontalSlider',
  props: {
    slides: {
      type: Array,
      required: true,
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
      handModeExpirationDate: 0,
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    currentMonth() {
      return new Date().getMonth();
    },
    showArrows() {
      return this.slides.length > 1;
    },
  },
  created() {
    this.checkHandMode();
  },
  methods: {
    setHandMode() {
      const handModeExpirationDate = new Date();
      handModeExpirationDate.setHours(23, 59, 59, 59); // сегодня, 23:59:59.
      saveInfo(`h_slider__${this.dateType}`,
        {
          handMode: this.handMode,
          expirationDate: +handModeExpirationDate,
          index: this.chosenIndex,
        });
    },
    checkHandMode() {
      const sliderInfo = getSavedInfo(`h_slider__${this.dateType}`);
      if (sliderInfo) {
        this.handModeExpirationDate = sliderInfo.expirationDate;
        this.chosenIndex = sliderInfo.index;
        this.handMode = sliderInfo.handMode;

        this.updateShownPlan();
      }
      this.clearHandMode();
    },
    clearHandMode() {
      const currentDate = +new Date();
      if (currentDate > this.handModeExpirationDate) return;
      setTimeout(() => {
        this.handMode = false;
      }, this.handModeExpirationDate - currentDate);

      const diff = this.handModeExpirationDate - currentDate;
      console.log(`handMode expires in ${diff / 1000 / 60 / 60} hours`);
    },
    updateShownPlan() {
      const emitInfo = {
        sliderType: this.dateType,
        index: this.chosenIndex,
      };
      this.$emit('slide-chosen', emitInfo);
    },
    getNextSlide() {
      this.handMode = true;
      if (this.chosenIndex === this.slides.length - 1) {
        this.chosenIndex = 0;
      } else {
        this.chosenIndex++;
      }

      this.setHandMode();
      this.updateShownPlan();
    },
    getPrevSlide() {
      this.handMode = true;
      if (this.chosenIndex === 0) {
        this.chosenIndex = this.slides.length - 1;
      } else {
        this.chosenIndex--;
      }

      this.setHandMode();
      this.updateShownPlan();
    },
  },
};
</script>
