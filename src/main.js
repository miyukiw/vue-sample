// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/Hello'
const Foo = { template: '<h1>This is foo!</h1>' }
const Bar = { template: '<h1>This is bar!</h1>' }

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
