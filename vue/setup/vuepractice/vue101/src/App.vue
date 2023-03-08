<template>
<h1>Hello World</h1>
<Other  cheese="gouda"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Other from "./components/Other-1.vue"

export default {
  name: 'App',
  components: {
    Other
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
