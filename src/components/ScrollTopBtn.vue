<template>
    <a
      :href="`#${scrollToId}`"
      :class='["scroll-to-top", {"scroll-btn-shown": btnShown}]'
    />
</template>

<script>
export default {
  name: 'ScrollTopBtn',
  props: {
    scrollToId: {
      type: String,
      default: 'app',
    },
    startScroll: {
      type: Number,
      required: false,
      default: 100,
    },
  },
  data() {
    return {
      btnShown: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > this.startScroll) {
        this.btnShown = true;
      } else {
        this.btnShown = false;
      }
    },
  },
};
</script>
