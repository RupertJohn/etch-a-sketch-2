<template>
  <div id="pixelContainer">
    <pixel v-for="n in pixels" :key="n"></pixel>
  </div>
</template>

<script>
  import Pixel from './Pixel'

  export default {
    props: ['rows'],
    computed: {
      pixels: function() {
        return this.rows*this.rows;
      }
    },
    components: {
      'pixel': Pixel
    }
  }
</script>

<style scoped>
#pixelContainer {
  margin: auto;
  border: 2px solid #CCC;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}
</style>
