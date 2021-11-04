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
    left: {
      type: String,
      required: false,
      default: 'auto',
    },
    minWidth: {
      type: String,
      required: false,
      default: 'auto',
    },
  },
  computed: {
    cssProps() {
      const rightNumber = parseInt(this.right, 10);
      const leftNumber = parseInt(this.left, 10);
      return {
        // right может быть числом или auto
        '--right': rightNumber ? `${rightNumber}px` : this.right,
        '--top': `${this.top}px`,
        '--left': leftNumber ? `${leftNumber}px` : this.left,
        '--minWidth': this.minWidth,
      };
    },
  },
};
</script>
