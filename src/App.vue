<template>
  <div id="app">
      <main-wrapper />
  </div>
</template>

<script>
import mainWrapper from './components/main-wrapper'


export default {
  name: 'app',
  components: {
    mainWrapper,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  font-weight: normal;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
