import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Applicant from './Applicant.vue'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')