import Vue from 'vue'
import Router from 'vue-router'

import css from '@/views/css/index'
import grandient from '@/views/css/css3/grandient'
import animation from '@/views/css/css3/animation'
import flex from '@/views/css/flex'
import functionArr from '@/views/js/functionArr'
// es6方法
import es6 from '@/views/js/es6/index'
import esFunctionStr from '@/views/js/es6/function/str'
import esFunctionObj from '@/views/js/es6/function/object'
import esFunctionArr from '@/views/js/es6/function/array'
import esFunctionSymbol from '@/views/js/es6/function/Symbol'
import esFunctionSetAndMap from '@/views/js/es6/function/setAndMap'
// 其它方法
import functionOther from '@/views/js/functionOther/index'
import lazyLayout from '@/views/js/functionOther/function/lazyLayout'

Vue.use(Router)
const router = new Router({
  base: 'project',
  mode: 'hash',
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
    {
      path: '/js/es6',
      redirect: '/js/es6/esFunctionStr',
      component: es6,
      children: [
        { path: '/js/es6/esFunctionStr', component: esFunctionStr },
        { path: '/js/es6/esFunctionObj', component: esFunctionObj },
        { path: '/js/es6/esFunctionArr', component: esFunctionArr },
        { path: '/js/es6/esFunctionSymbol', component: esFunctionSymbol },
        { path: '/js/es6/esFunctionSetAndMap', component: esFunctionSetAndMap }
      ]
    },
    {
      path: '/js/functionOther',
      redirect: '/js/functionOther/lazyLayout',
      component: functionOther,
      children: [
        { path: '/js/functionOther/lazyLayout', component: lazyLayout }
      ]
    }
  ]
})

export default router
