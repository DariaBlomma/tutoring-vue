<template>
  <div class="page contents">
    <h1 class='primary-title'>Contents</h1>
    <ul>
      <li><router-link to="/ЕГЭ">ЕГЭ</router-link></li>
      <li><router-link :to="{name: 'horizonte-6'}">Horizonte 6</router-link></li>
      <li><router-link to="/Spotlight">Spotlight</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Contents',
};
</script>
