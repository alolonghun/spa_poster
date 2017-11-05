import Vue from 'vue'
import Router from 'vue-router'
import Photograph from '@/pages/photograph'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'photograph',
      component: Photograph
    }
  ]
})
