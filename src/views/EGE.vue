<template>
  <div class="page ege">
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

<script>
export default {
  name: 'EGE',
  data() {
    return {
      contentLinks: [
        {
          routeName: 'ege-dictionaries',
          linkTitle: 'Dictionaries',
          icon: 'contents/dictionary.png',
        },
        {
          routeName: 'lesson-materials',
          linkTitle: 'Lesson materials',
          icon: 'contents/exercise.png',
        },
        {
          routeName: 'hw-tasks',
          linkTitle: 'Homework tasks',
          icon: 'contents/hw.png',
        },
        {
          routeName: 'lesson-reports',
          linkTitle: 'Отчеты по проведенным занятиям',
          icon: 'contents/report.png',
        },
        {
          routeName: 'lesson-plans',
          linkTitle: 'Lesson plans',
          icon: 'contents/todo.png',
        },
        // {
        //   routeName: 'en-word-forms',
        //   linkTitle: 'Word forms',
        // },
      ],
    };
  },
};
</script>
