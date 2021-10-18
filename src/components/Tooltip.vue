<template>
  <div class='tooltip'>{{text}}</div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
