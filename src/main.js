import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import "./main.scss"
import History from './pages/History.vue'
import VueRouter from "vue-router"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
    {path: '/history', component: History},
]
const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
