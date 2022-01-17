<template>
  <div class="page ege">
    <header>
      <router-link class='go-back light' :to="{name: 'home'}">Go back</router-link>
    </header>
    <div class='contents'>
      <h1 class='primary-title heading-light'>Contents</h1>
      <ul>
          <li>
            <router-link
              class='light'
              :to="{name: 'ege-dictionaries'}"
            >
            Dictionaries
            </router-link>
          </li>
          <li>
            <router-link
              class='light'
              :to="{name: 'lesson-materials'}"
            >
            Lesson materials
            </router-link>
          </li>
          <li>
            <router-link
              class='light'
              :to="{name: 'hw-tasks'}"
            >
            Homework tasks
            </router-link>
          </li>
        <!-- <li><router-link :to="{name: 'en-word-forms'}">Word forms</router-link></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EGE',
};
</script>
