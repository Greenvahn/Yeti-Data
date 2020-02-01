import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import {store} from './store/store.js'

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}
).$mount('#app')
