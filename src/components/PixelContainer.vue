<template>
  <div class="pixelContainer">
    <div v-for="pixel in pixels">
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
.pixelContainer {
  width: 70%;
  border: 1px solid black;
}
<style>
