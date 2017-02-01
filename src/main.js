// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/Hello'
import Issues from './components/Issues'
import Issue from './components/Issue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello },
  { path: '/issues', component: Issues },
  { path: '/issues/:number', component: Issue }
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
