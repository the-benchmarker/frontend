import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import "./main.scss"
import VueRouter from "vue-router"

import History from './pages/History.vue'
import Home from './pages/Home.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
    {path: "/", component: Home},
    {path: '/history', component: History},
]
const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
