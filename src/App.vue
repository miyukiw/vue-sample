<template>
  <div id="app">
    <nav>
      <router-link to="/">Hello</router-link>
      <router-link to="/issues">Issues</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  border-bottom: 1px solid #ccc;
  padding: 30px;
}
</style>
