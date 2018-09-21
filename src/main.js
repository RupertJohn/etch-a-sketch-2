import Vue from 'vue'
import App from './App.vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    render: h => h(App),
    data: {
      message: "How about dat?"
    }
  });
})
