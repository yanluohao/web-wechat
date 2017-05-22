// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Wechat from './components/wechat.vue'
import Contact from './components/contact.vue'
import Discovery from './components/discovery.vue'
import User from './components/user.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

var router=new VueRouter({
  linkActiveClass:'active',
  routes:[
    {path:'/index',component:Wechat},
    {path:'/contact',component:Contact},
    {path:'/discovery',component:Discovery},
    {path:'/user',component:User}
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
