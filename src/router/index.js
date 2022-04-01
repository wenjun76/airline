import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'
import Ticketinfo from 'views/ticketinfo/ticketinfo'
import Purchase from 'views/purchase/purchase'
import Login from 'views/users/login'
import Register from 'views/users/register'
import User from 'views/users/user'
import Planeticket from 'views/users/usersinfo/planeticket'
import Other from 'views/users/usersinfo/other'
import Passenger from 'views/users/usersinfo/passenger'
import Address from 'views/users/usersinfo/address'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/ticketinfo/:from/:to/:time',
    name: 'TicketInfo',
    component: Ticketinfo,
    meta: {
      title: 'Ticketinfo'
    }
  },
  {
    path: '/purchase/:flightid/:room',
    name: 'Purchase',
    component: Purchase,
    meta: {
      title: 'Purchase'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      title: 'User'
    },
    children: [
      {
        path: 'planeticket',
        component: Planeticket
      },
      {
        path: 'other',
        component: Other
      },
      {
        path: 'passenger',
        component: Passenger
      },
      {
        path: 'address',
        component: Address
      }
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
