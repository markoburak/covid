import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Applicant from '@/views/Applicant.vue'
import Description from '@/views/Description.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/covid',
            component: Home
        },
        {
            path: '/applicant',
            component: Applicant
        },
        {
            path: '/description',
            component: Description
        }
    ]
})