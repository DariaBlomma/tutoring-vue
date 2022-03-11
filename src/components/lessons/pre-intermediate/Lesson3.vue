<template>
  <div class="sub-page sub-page--dark-theme en-lesson lesson3">
    <header>
      <router-link class="go-back light" :to="{ name: 'vlad' }">To personal page</router-link>
    </header>
    <main>
      <div class="sub-page__contents">
        <h2 class="secondary-title heading-white">Lesson 3</h2>
        <ol class="en-lesson__list">
          <li class="light">
            <h4
              class="en-lesson__task-title"
            >
              Tell about Present Simple, what it means, how is formed
            </h4>
            <router-link
              :to="{ name: 'present-simple' }"
              target="_blank"
            >
              Present Simple theory
            </router-link>
          </li>
          <li class="light">
            <h4 class="en-lesson__task-title">When do you need To be?</h4>
            <router-link
              :to="{ name: 'to-be-in-present-simple' }"
              target="_blank"
              class="en-lesson__link"
            >
            To be forms
            </router-link>
            <img src="@/assets/english/present-simple/to-be-examples.png" class="img" />
          </li>
          <li class="light" id="vlad-lesson3-gr-exs">
            <h4 class="en-lesson__task-title">Grammar exercises</h4>
            <img
              src="@/assets/english/present-simple/to-be-affirmative-murphy-1.1-1.2.png"
              class="img lesson3__gr-img"
            />
            <img
              src="@/assets/english/present-simple/to-be-questions-murphy-2.2.png"
              class="img lesson3__gr-img"
            />
            <div class="lesson3__speakout-imgs">
              <img
                src="@/assets/english/speakout-elementary/before-units/ex-3a-4a.png"
                class="img lesson3__gr-img"
              />
              <img
                src="@/assets/english/speakout-elementary/unit-1/ex1.png"
                class="img lesson3__gr-img"
              />
              <img
                src="@/assets/english/speakout-elementary/unit-1/ex4.png"
                class="img lesson3__gr-img"
              />
            </div>
          </li>
          <li class="light" id="vlad-lesson-3-speaking">
            <h4 class="en-lesson__task-title">
              What do you talk about with your customers?
              What words do you usually need? What topics do you discuss?
            </h4>
          </li>
        </ol>
      </div>
    </main>
    <footer />
  </div>
</template>

<script setup>
</script>
