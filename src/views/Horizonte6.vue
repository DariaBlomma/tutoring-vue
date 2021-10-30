<template>
  <div class="page horizonte-6">
    <header>
      <router-link class='go-back' :to="{name: 'home'}">Zurück</router-link>
    </header>
    <div class='contents lessons'>
      <h1>Lektionen</h1>
      <ul>
          <li><router-link :to="{name: 'zimmer'}">Zimmer</router-link></li>
          <li><router-link :to="{name: 'essen'}">Essen</router-link></li>
      </ul>
    </div>
    <div class='contents hws'>
      <h1>Hausaufgaben</h1>
    </div>
    <div class='contents theory'>
      <h1>Theorie</h1>
    </div>
    <div class='contents grammar'>
      <h1>Grammatik</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Horizonte6',
};
</script>
