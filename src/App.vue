<template>
  <div id="app">
    <pixel-container :rows="rows"></pixel-container>
    <input type="number" v-model="rows"></input>
  </div>
</template>

<script>
  import PixelContainer from './components/PixelContainer'

  export default {
    name: 'app',
    data: function() {
      return {
        rows: 0
      }
    },
    components: {
      'pixel-container': PixelContainer
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
