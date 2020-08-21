import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/modules/user.js'
import auth from './auth'

import Home from '@/components/Visitor/Home.vue'
const Menu = () => import(/*webpackChunkName: "Menu"*/'@/components/Visitor/Menu.vue')
const About = () => import(/*webpackChunkName: "About"*/'@/components/Visitor/About.vue')
const Contact = () => import(/*webpackChunkName: "Contact"*/'@/components/Visitor/Contact.vue')
const History = () => import(/*webpackChunkName: "History"*/'@/components/Visitor/History.vue')
const Delivery = () => import(/*webpackChunkName: "Delivery"*/'@/components/Visitor/Delivery.vue')

const Admin = () => import(/*webpackChunkName: "Admin"*/'@/components/Admin/Admin.vue')
const ClientsOrders = () => import(/*webpackChunkName: "ClientsOrders"*/'@/components/Admin/ClientsOrders')
const ManegeMenu = () => import(/*webpackChunkName: "ManegeMenu" */'@/components/Admin/ManegeMenu')
const addNewPizza = () => import(/*webpackChunkName: "addNewPizza" */'@/components/Admin/NewPizza')

const SignIn = () => import(/*webpackChunkName: "SignIn"*/'@/components/User/Login.vue')
const SignUp = () => import(/*webpackChunkName: "SignUp"*/ '@/components/User/SignUp.vue')
const OrderingGuide = () => import(/*webpackChunkName: "OrderingGuide"*/ '@/components/Visitor/OrderingGuide.vue')

export const routes = [
  {
    path: '/', name: 'homeLink', components: {
      default: Home,
      'ordering-guide': OrderingGuide,
      'delivery': Delivery,
      'history': History,
    }, meta: {
      public: true,
    }
  },
  {
    path: '/signIn', name: 'SignIn', component: SignIn, meta: {
      public: true,
      onlyLoggedOut: true,
    }
  },
  {
    path: '/signUp', name: 'SignUp', component: SignUp, meta: {
      public: true,
      onlyLoggedOut: true,
    }
  },
  {
    path: '/menu', name: 'menuLink', component: Menu, meta: {
      public: true,
    }
  },
  {
    path: '/admin', name: 'adminLink', component: Admin, meta: { public: false }, 
    beforeEnter: auth
  },
  {
    path: '/clients-orders', name: 'ClientsOrders' , component: ClientsOrders, meta: { public: false},
    beforeEnter: auth
  },
  {
    path: '/manege-menu', name: 'ManegeMenu' , component: ManegeMenu, meta: { public: false },
    beforeEnter: auth
  },
  {
    path: '/new-pizza', name: 'addNewPizza' , component: addNewPizza, meta: { public: false },
    beforeEnter: auth
  },
  {
    path: '/about', name: 'aboutLink', component: About, children: [
      { path: '/contact', component: Contact },
      { path: '/delivery', component: Delivery },
      { path: '/history', component: History },
      { path: '/ordering-guide', component: OrderingGuide }
    ]
  },
  {
    path: '*', redirect: '/', meta: {
      public: true,
    }
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  // the pages which just the authentication user can visit
  console.log('from route')
  console.log(store.getters.user)
  const authenticated = store.getters.user !== null
  // the pages which just the visitor can visit
  const onlyLoggedOut = to.matched.some(record => record.meta.onlyLoggedOut)
  // the pages which the uathentication user and visitor (nonAuthentication) can visit it 
  const isPublic = to.matched.some(record => record.meta.public)
  if (!isPublic && !authenticated) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return next({
      path: '/signIn',
      query: { redirect: to.fullPath }
    })
  }
  if (authenticated && onlyLoggedOut) {
    return next('/')
  }
  // if user authentication and the route is not public as timeline
  next()
})