import Vue from 'vue';
import App from './App.vue';
import InstantSearch from 'vue-instantsearch';
import VueObserveVisibility from 'vue-observe-visibility';

Vue.use(InstantSearch);
Vue.use(VueObserveVisibility);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
