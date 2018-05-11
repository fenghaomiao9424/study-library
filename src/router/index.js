import Vue from 'vue'
import Router from 'vue-router'

import css from '@/views/css/index'
import grandient from '@/views/css/css3/grandient'
import animation from '@/views/css/css3/animation'
import flex from '@/views/css/flex'
import functionArr from '@/views/js/functionArr'
import es6 from '@/views/js/es6'

Vue.use(Router)
const router = new Router({
  base: 'project',
  mode: 'history',
  routes: [
    { path: '/', redirect: '/css' },
    {
      path: '/css',
      redirect: '/css3/grandient',
      component: css,
      children: [
        { path: '/css3/grandient', component: grandient },
        { path: '/css3/animation', component: animation }
      ]
    },
    { path: '/flex', component: flex },
    { path: '/js/functionArr', component: functionArr },
    { path: '/js/function/functionEs6', component: es6 }
  ]
})

export default router
