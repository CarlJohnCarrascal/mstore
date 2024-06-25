import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerView from '../views/CustomerView.vue'
import PosView from '../views/PosView.vue'
import TransactionView from '../views/TransactionView.vue'
import ManageProductView from '../views/ManageProductView.vue'
import DebitView from '../views/DebtView.vue'
import MessageView from '../views/MessageView.vue'

import MoneyView from '../views/pos/MoneyView.vue'
import CashTransactionDetails from '../components/pos/money/CashTransactionDetails.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: HomeView
  },
  {
    path: '/pos',
    name: 'pos',
    component: PosView
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: TransactionView
  },
  {
    path: '/debt',
    name: 'debt',
    component: DebitView
  },
  {
    path: '/manageproduct',
    name: 'manageproduct',
    component: ManageProductView
  },
  {
    path: '/customer',
    name: 'customer',
    component: CustomerView
  },
  {
    path: '/messages',
    name: 'customer',
    component: MessageView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/pos/cashinout',
    name: 'cashinout',
    component: MoneyView
  },
  {
    path: '/pos/cashinout/details',
    name: 'cashtransactiondetails',
    component: CashTransactionDetails
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
