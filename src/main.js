import Vue from 'vue'
import App from './App.vue'
// 注册全局组件
// 1、引入组件
// import User from './components/User.vue'

// 2.注册全局组件
// Vue.component('user', User);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//如果public->不是ID="app" 那么此处的也就不是#app($mount('#app'))
//如果public->不是class="app" 那么此处的也就不是.app
