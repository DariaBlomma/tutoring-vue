<template>
    <div class='color-states'>
        <h2 class='secondary-title light'>Значения цветов</h2>
        <div
          v-for="color in colorsList"
          :key="color.class"
          class='color-states__line'
        >
          <div :class="['color-states__example', `color-states__example--${color.class}`]" />
          <div class='color-states__explanation'>{{ color.explanation }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ColorStates',
  props: {
    colorsList: {
      // * [ { class, explanation }]
      type: Array,
      required: true,
    },
  },
};
</script>
