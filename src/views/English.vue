<template>
  <div class="page page--dark-theme english">
    <header>
      <router-link class='go-back light' :to="{name: 'home'}">
        To home page
      </router-link>
    </header>
    <main>
      <div class='page__contents'>
        <h1 class='primary-title heading-white'>Contents</h1>
        <ul>
            <li
              v-for="link in contentLinks"
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
                :to="{name: `${link.routeName}`}"
              >
              {{ link.linkTitle }}
              </router-link>
            </li>
        </ul>
      </div>
    </main>
    <footer/>
  </div>
</template>

<script setup>
const contentLinks = [
  {
    routeName: 'spotlight',
    linkTitle: 'Spotlight',
    icon: 'contents/english.png',
  },
  {
    routeName: 'level-tests',
    linkTitle: 'Level tests',
    icon: 'contents/exercise.png',
  },
  // {
  //   routeName: 'en-word-forms',
  //   linkTitle: 'Word forms',
  // },
];
</script>
