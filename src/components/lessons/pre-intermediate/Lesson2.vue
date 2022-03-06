<template>
  <div class="sub-page sub-page--dark-theme english en-lesson">
    <header>
      <router-link class='go-back light' :to="{name: 'vlad'}">
        To personal page
      </router-link>
    </header>
    <main>
      <div class='sub-page__contents'>
        <h1 class='primary-title heading-white'>Lesson 2</h1>
        <ol>
          <li class='light'>
            <h4 class='en-lesson__task-title'>
              Tell shortly about the system of English tenses and give some examples
            </h4>
            <router-link :to="{name: 'all-en-tenses'}" target="_blank">
              All tenses theory
            </router-link>
          </li>
          <li class='light' id="vlad-lesson2-gr-exs">
              <h4 class='en-lesson__task-title'>Grammar exercises</h4>
              <router-link :to="{name: 'present-simple'}" target="_blank">
                Present Simple theory
              </router-link>
              <img src='@/assets/english/present-simple/affirmative-murphy-5.3.png' class="img">
              <img src='@/assets/english/present-simple/negative-murphy-6.1.png' class="img">
              <img src='@/assets/english/present-simple/question-murphy-7.1.png' class="img">
              <img src='@/assets/english/present-simple/speakout-elementary-4a.png' class="img">
          </li>
          <li class='light' id="vlad-lesson-2-listening">
            <h4 class='en-lesson__task-title'>Listening. Introductions</h4>
            <a
              href='https://youtu.be/wVLSUp-no50'
              target="blank"
              class="link"
            >
              Watch the video
            </a>
            <h4 class='en-lesson__task-title'>Answer the questions (till 1.00)</h4>
            <ol>
              <li>What is his name ?</li>
              <li>Where does he come from ?</li>
              <li>What nationality is he?</li>
              <li>What does he do/ what is his job?</li>
              <li>What is he interested in?</li>
            </ol>
            <h4 class="en-lesson__task-title centered">Introductions - in family</h4>
            <a
              href='https://www.youtube.com/watch?v=KIQFg_IidQg'
              target="blank"
              class="link"
            >
              Video
            </a>
            <div>
              <h4 class='en-lesson__task-title'>Questions</h4>
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
