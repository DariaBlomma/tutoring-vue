<template>
  <div class="page home-page">
    <header class='header'/>
    <main class='main'>
      <h1 class='primary-title light'>Contents</h1>
      <ul>
        <li
          v-for="link in contentsLinks"
          :key="link.routeName"
          class='link-wrapper'
        >
          <img
            v-if="link.icon"
            :src="require(`@/assets/${link.icon}`)"
            class='link-icon'
          >
          <router-link
            :to="{name: `${link.routeName}`}"
          >
          {{ link.linkTitle }}
          </router-link>
        </li>
      </ul>
    </main>
    <footer/>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      contentsLinks: [
        {
          routeName: 'ege',
          linkTitle: 'ЕГЭ',
          icon: 'contents/exam.svg',
        },
        {
          routeName: 'horizonte-6',
          linkTitle: 'Horizonte 6',
          icon: 'contents/german.png',
        },
        {
          routeName: 'spotlight',
          linkTitle: 'Spotlight',
          icon: 'contents/english.png',
        },
      ],
    };
  },
};
</script>
