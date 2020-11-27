import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categories from "@/views/Categories";


Vue.use(VueRouter)

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
        path: '/',
        name: 'Home',
        meta: {layout: 'main'},
        component: ()=>import('@/views/Home')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {layout: 'empty'},
        component: () => import("@/views/Login.vue")
    },
    {
        path: '/categories',
        name: 'Categories',
        meta: {layout: 'main'},
        component: () => import('@/views/Categories.vue')
    },
    {
        path: '/history',
        name: 'History',
        meta: {layout: 'main'},
        component: () => import('@/views/History')
    },
    {
        path: '/planing',
        name: 'Plnanig',
        meta: {layout: 'main'},
        component: () => import('@/views/Planing')
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {layout: 'main'},
        component: () => import('@/views/Profile')
    },
    {
        path: '/record',
        name: 'Record',
        meta: {layout: 'main'},
        component: () => import('@/views/Record')
    },
    {
        path: '/register',
        name: 'Register',
        meta: {layout: 'empty'},
        component: () => import('@/views/Register')
    },
    {
        path: '/detali',
        name: 'Detali',
        meta: {layout: 'main'},
        component: () => import('@/views/Detali')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
