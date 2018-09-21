<template>
  <div id="app">
    <pixel-container :message="message"></pixel-container>
  </div>
</template>

<script>
  import PixelContainer from './components/PixelContainer'

  export default {
    name: 'app',
    data: function() {
      return {
        message: "Pass message down"
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
