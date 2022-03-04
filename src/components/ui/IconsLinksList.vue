<template>
  <ul>
    <li
      v-for="link in links"
      :key="link.routeName"
      class='link-wrapper'
    >
      <img
        v-if="link.icon"
        :src="require(`@/assets/${link.icon}`)"
        class='link-icon'
      >
      <router-link
        class='light'
        :to="{
          name: `${link.routeName}`,
          params: link.routeParams || {},
        }"
      >
      {{ link.linkTitle }}
      </router-link>
    </li>
</ul>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
  // *  [ { routeName, linkTitle, icon }]
  links: {
    type: Array,
    required: true,
  },
});

const { links } = toRefs(props);
</script>
