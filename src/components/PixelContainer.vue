<template>
  <div id="pixelContainer" :style="conditionalStyling">
    <pixel v-for="n in pixels" :key="n" :opacity="0"></pixel>
  </div>
</template>

<script>
  import Pixel from './Pixel'

  export default {
    props: ['rows'],
    computed: {
      pixels: function() {
        return this.rows*this.rows;
      },
      conditionalStyling: function() {
        return {
          gridTemplateColumns: this.gridTemplate(),
          gridTemplateRows: this.gridTemplate(),
          width: this.rows*15 + 'px'
        }
      }
    },
    methods: {
      gridTemplate: function() {
        return "15px ".repeat(this.rows);
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
  display: grid;
}
</style>
