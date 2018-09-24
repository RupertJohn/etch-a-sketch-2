<template>
  <div id="pixelContainer">
    <div v-for="n in pixels" :key="n">
      <pixel></pixel>
    </div>
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
  /* width: 480px; */
  border: 2px solid red;
  /* height: 20px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
