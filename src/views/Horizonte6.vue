<template>
  <div class="horizonte-6 page">
    <div class='lessons'>
      <h1>Lektionen</h1>
      <ul>
        <li><router-link :to="{ name: 'zimmer' }">Mein Zimmer</router-link></li>
        <li><router-link :to="{ name: 'essen' }">Das Essen</router-link></li>
      </ul>
    </div>
    <div class='hws'>
      <h1>Hausaufgaben</h1>
    </div>
    <div class='theory'>
      <h1>Theorie</h1>
    </div>
    <div class='grammar'>
      <h1>Grammatik</h1>
    </div>
  </div>
  <router-view/>
</template>

<script>
// @ is an alias to /src
// import Zimmer from '@/components/Zimmer.vue';

export default {
  name: 'Horizonte6',
  components: {
    // Zimmer,
  },
};
</script>
