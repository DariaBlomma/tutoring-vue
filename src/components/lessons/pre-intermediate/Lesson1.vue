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
            <a
              href='https://youtu.be/wVLSUp-no50'
              class="link"
            >
              Watch the video
            </a>
            <h4 class="centered">Introductions - in family</h4>
            <a
              href='https://www.youtube.com/watch?v=KIQFg_IidQg'
              class="link"
            >
              Video
            </a>
            <div>
              <b>Questions</b>
              <ol>
                <li>Tell about each of the people</li>
                <li>What phrases are used to talk about person's job,
                  to greet, to start a polite converstation, etc?</li>
                <li>Listen and translate every sentence.
                  Use subtitles, if necessary, or change the video's speed</li>
              </ol>
            </div>
          </li>
        </ol>
      </div>
    </main>
    <footer/>
  </div>
</template>

<script setup>
</script>
