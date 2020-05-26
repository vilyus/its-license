<template>
  <div id="app">
    <License />
  </div>
</template>

<script>
import License from './components/License'

export default {
  name: 'App',
  components: {
    License
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
