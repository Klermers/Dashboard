import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import store from './store'

Vue(App).mount('#app')

new Vue({
    VueRouter,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
