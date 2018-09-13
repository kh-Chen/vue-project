import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang-i18n';

// Vue.config.productionTip = false;
Vue.use(iView);

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
});
