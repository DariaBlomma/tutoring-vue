<template>
  <div class="page ege">
    <header>
      <router-link class='go-back light' :to="{name: 'home'}">Go back</router-link>
    </header>
    <div class='contents'>
      <h1 class='primary-title heading-light'>Contents</h1>
      <ul>
          <li
            v-for="link in contentLinks"
            :key="link.routeName"
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
        },
        {
          routeName: 'lesson-materials',
          linkTitle: 'Lesson materials',
        },
        {
          routeName: 'hw-tasks',
          linkTitle: 'Homework tasks',
        },
        {
          routeName: 'lesson-reports',
          linkTitle: 'Отчеты по проведенным занятиям',
        },
        // {
        //   routeName: 'lesson-plans',
        //   linkTitle: 'Lesson plans',
        // },
        // {
        //   routeName: 'en-word-forms',
        //   linkTitle: 'Word forms',
        // },
      ],
    };
  },
};
</script>
