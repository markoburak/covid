import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Applicant from '@/views/Applicant.vue'
import Description from '@/views/Description.vue'
import Results from '@/views/Results.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/applicant',
            component: Applicant
        },
        {
            path: '/description',
            component: Description
        },
        {
            path: '/results',
            component: Results
        }
    ]
})