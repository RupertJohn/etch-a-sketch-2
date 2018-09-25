<template>
  <div class='pixel' v-on:mouseenter="darken" :style="opacityStyle"></div>
</template>

<script>
  export default {
    props: ['opacity'],
    computed: {
      opacityStyle: function() {
        return {
          opacity: this.opacity
        }
      }
    },
    methods: {
      darken: function() {
        return this.opacity += 0.1
      }
    }
  }
</script>

<style scoped>
.pixel {
  background-color: black;
  width: 15px;
  height: 15px;
}
</style>
