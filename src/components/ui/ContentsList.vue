<template>
  <ol class="contents-list">
    <li v-for="line in contentsList" :key="line.moveTo" class="contents-list__line">
      <router-link
        v-if="useRouterLinks"
        :to="{ name: line.moveTo }"
        class="link"
      >
        {{ line.title }}
      </router-link>
      <a v-else :href="`#${line.moveTo}`" class="link">{{ line.title }}</a>

      <ol v-if="line.sublist">
        <li v-for="subline in line.sublist" :key="subline.moveTo" class="contents-list__line">
          <router-link
            v-if="useRouterLinks"
            :to="{ name: subline.moveTo }"
            class="link"
          >
            <span class="contents-list__unique-number">{{ subline.uniqueNumber + " " }}</span>
            <span class="contents-list__topic">{{ subline.title }}</span>
          </router-link>
          <a v-else :href="`#${subline.moveTo}`">
            <span class="contents-list__unique-number">{{ subline.uniqueNumber + " " }}</span>
            <span class="contents-list__topic">{{ subline.title }}</span>
          </a>
        </li>
      </ol>
    </li>
  </ol>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
  contentsList: {
    // * [{ moveTo, title, sublist: [ { moveTo, uniqueNumber, title }] }]
    type: Array,
    required: true,
  },
  useRouterLinks: {
    type: Boolean,
    defeault: false,
  },
});

const { contentsList, useRouterLinks } = toRefs(props);
</script>
