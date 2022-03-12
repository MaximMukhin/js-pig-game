<template>
  <div class="app">
      <MainWrapper />
  </div>
</template>

<script>
import MainWrapper from './components/MainWrapper'


export default {
  name: 'App',
  components: {
    MainWrapper,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.app {
  font-weight: normal;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
