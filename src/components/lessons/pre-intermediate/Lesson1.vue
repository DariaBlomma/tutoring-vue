<template>
  <div class="sub-page sub-page--dark-theme lesson1">
    <header>
      <router-link class='go-back light' :to="{name: 'vlad'}">
        To personal page
      </router-link>
    </header>
    <main>
      <div class='sub-page__contents'>
        <h2 class='secondary-title heading-white'>Lesson 1</h2>
        <ol>
          <li class='light'>
            <router-link :to="{name: 'en-tenses'}">
              Tenses theory
            </router-link>
          </li>
          <li class='light'>
              <h4 class='en-lesson__task-title'>Grammar exercises</h4>
              <ul class='list-typed'>
                <li>
                  <a
                    href='https://docs.google.com/document/d/1CwgIFzOmLeJDoukPgEa7u4NN_9d0w2Pq/edit?usp=sharing&ouid=100114228061075300910&rtpof=true&sd=true'
                    claas='link'
                  >
                  Present Simple
                  </a>
                </li>
              </ul>
          </li>
          <li class='light'>
            <h4 class='en-lesson__task-title'>Introduce yourself</h4>
            <img
              src='@/assets/english/introduce-yourself-matching.jpg'
              class="img introduce-yourself"
            >
          </li>
        </ol>
      </div>
    </main>
    <footer/>
  </div>
</template>

<script setup>
</script>
