<template>
  <div class="page page--dark-theme english">
    <header>
      <router-link class='go-back light' :to="{name: 'vlad'}">
        To personal page
      </router-link>
    </header>
    <main>
      <div class='page__contents'>
        <h1 class='primary-title heading-white'>Lesson 1</h1>
        <ol>
          <li class='light'>
            <router-link :to="{name: 'en-tenses'}">
              Tenses theory
            </router-link>
          </li>
          <li class='light'>
              Grammar exercises
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
            Introduce yourself
            <img src='@/assets/english/introduce-yourself.jpg' class="img introduce-yourself">
          </li>
        </ol>
      </div>
    </main>
    <footer/>
  </div>
</template>

<script setup>
</script>
