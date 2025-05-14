import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import RegisterDonor from '../components/RegisterDonor.vue'
import ScheduleDonation from '../components/ScheduleDonation.vue'
import StockReports from '../components/StockReport.vue'
import Notifications from '../components/Notifications.vue'
import DonationHistory from '../components/DonationHistory.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'register-donor',
    component: RegisterDonor
  },
  {
    path: '/agendar',
    name: 'schedule-donation',
    component: ScheduleDonation
  },
  {
    path: '/estoque',
    name: 'stock-reports',
    component: StockReports
  },
  {
    path: '/notificacoes',
    name: 'notifications',
    component: Notifications
  },
  {
    path: '/historico',
    name: 'donation-history',
    component: DonationHistory
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
