import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store.js'

//Font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faCloudUploadAlt)

// Register the VUE component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}
).$mount('#app')
