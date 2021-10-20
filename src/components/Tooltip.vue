<template>
  <div
    class='tooltip'
    :style='cssProps'
  >{{text}}</div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    text: {
      type: String,
      required: true,
    },
    right: {
      type: String,
      required: false,
      default: '0',
    },
    top: {
      type: Number,
      required: false,
      default: -50,
    },
  },
  computed: {
    cssProps() {
      return {
        // right может быть числом или auto
        '--right': parseInt(this.right, 10) || this.right,
        '--top': `${this.top}px`,
      };
    },
  },
};
</script>
