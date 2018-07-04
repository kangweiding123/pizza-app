import Vue from 'vue'
import App from './App.vue'

import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
// 引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// 引入路由
import routerConfig from './router/routes';
import VueRouter from 'vue-router'

// 引入bootstrapVue
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue)

Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(iView)



const router = new VueRouter({
    routes:routerConfig,
    mode:'history'
})

new Vue({
    router,
  render: h => h(App)
}).$mount('#app')
