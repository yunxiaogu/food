import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 使用router
import router from './router/index.js'

// 使用element-ui
import element from './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(element)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
