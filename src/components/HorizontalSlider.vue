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
      Slide {{ slide }}
      date {{ currentDate }}
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
import saveInfo from '@/helpers/saveInfo';
import getSavedInfo from '@/helpers/getSavedInfo';

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
      handModeExpirationDate: 0,
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
    currentYear() {
      return new Date().getFullYear();
    },
    currentMonth() {
      return new Date().getMonth();
    },
    currentDay() {
      return new Date().getDate();
    },
    getHandModeDuration() {
      // * первые 60 - минуты, вторые 60 - секунды, 1000 - миллисекунды
      return this.handModeHours * 60 * 60 * 1000;
    },
    showArrows() {
      return this.slides.length > 1;
    },
  },
  created() {
    console.log('this.dateType: ', this.dateType);
    const sliderInfo = getSavedInfo(`h_slider__${this.dateType}`);
    console.log('this.dateType: ', this.dateType);
    if (sliderInfo) {
      this.handModeExpirationDate = sliderInfo.expirationDate;
      this.chosenIndex = sliderInfo.index;
      this.handMode = sliderInfo.mode;
    }
    this.checkHandMode();
  },
  methods: {
    setHandMode() {

    },
    checkHandMode() {
      const currentDate = +new Date();
      if (currentDate > this.handModeExpirationDate
        || this.handModeExpirationDate - currentDate === 0) return;
      // this.handMode = true;
      setTimeout(() => {
        this.handMode = false;
      }, this.handModeExpirationDate - currentDate);
      console.log('this.handModeExpirationDate - currentDate: ', this.handModeExpirationDate - currentDate);
    },
    getNextSlide() {
      this.handMode = true;
      if (this.chosenIndex === this.slides.length - 1) {
        this.chosenIndex = 0;
      } else {
        this.chosenIndex++;
      }

      const handModeExpirationDate = new Date();
      handModeExpirationDate.setHours(23, 59, 59, 59); // сегодня, 23:59:59.
      saveInfo(`h_slider__${this.dateType}`,
        {
          mode: this.handMode,
          expirationDate: +handModeExpirationDate,
          index: this.chosenIndex,
        });

      const emitInfo = {
        sliderType: this.dateType,
        index: this.chosenIndex,
      };
      this.$emit('slide-chosen', emitInfo);
    },
    getPrevSlide() {
      this.handMode = true;
      if (this.chosenIndex === 0) {
        this.chosenIndex = this.slides.length - 1;
      } else {
        this.chosenIndex--;
      }

      const handModeExpirationDate = new Date();
      handModeExpirationDate.setHours(23, 59, 59, 59); // сегодня, 23:59:59.
      saveInfo(`h_slider__${this.dateType}`,
        {
          mode: this.handMode,
          expirationDate: +handModeExpirationDate,
          index: this.chosenIndex,
        });

      const emitInfo = {
        sliderType: this.dateType,
        index: this.chosenIndex,
      };
      this.$emit('slide-chosen', emitInfo);
    },
  },
};
</script>
