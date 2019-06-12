import Vue from 'vue'
import Router from 'vue-router'

import css from '@/views/css/index'
import grandient from '@/views/css/css3/grandient'
import animation from '@/views/css/css3/animation'
import flex from '@/views/css/flex'
import functionArr from '@/views/js/functionArr'
import functionObj from '@/views/js/functionObj'
import functionHanshu from '@/views/js/functionHanshu'
// es6方法
import es6 from '@/views/js/es6/index'
import esFunctionStr from '@/views/js/es6/function/str'
import esFunctionObj from '@/views/js/es6/function/object'
import esFunctionArr from '@/views/js/es6/function/array'
import esFunctionSymbol from '@/views/js/es6/function/Symbol'
import esFunctionSetAndMap from '@/views/js/es6/function/setAndMap'
import esFunctionReflect from '@/views/js/es6/function/Reflect'
import esFunctionPromise from '@/views/js/es6/function/Promise'
import esFunctionGenerator from '@/views/js/es6/function/Generator'
import esFunctionAsync from '@/views/js/es6/function/async'
import esFunctionClass from '@/views/js/es6/function/Class'
// 其它方法
import functionOther from '@/views/js/functionOther/index'
import lazyLayout from '@/views/js/functionOther/function/lazyLayout'
import eventTaggle from '@/views/js/functionOther/function/eventTaggle'
import dataObserver from '@/views/js/functionOther/function/dataObserver'
import dataType from '@/views/js/functionOther/function/dataType'
import orderAlgorithm from '@/views/js/functionOther/function/orderAlgorithm'
import grammar from '@/views/js/functionOther/function/grammar'
import asyncHronous from '@/views/js/functionOther/function/asyncHronous'
import throAnddeb from '@/views/js/functionOther/function/throAnddeb'

Vue.use(Router)
const router = new Router({
  base: 'project',
  mode: 'hash',
  routes: [
    { path: '/', redirect: '/js/functionObj' },
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
    { path: '/js/functionObj', component: functionObj },
    { path: '/js/functionHanshu', component: functionHanshu },
    {
      path: '/js/es6',
      redirect: '/js/es6/esFunctionStr',
      component: es6,
      children: [
        { path: '/js/es6/esFunctionStr', component: esFunctionStr },
        { path: '/js/es6/esFunctionObj', component: esFunctionObj },
        { path: '/js/es6/esFunctionArr', component: esFunctionArr },
        { path: '/js/es6/esFunctionSymbol', component: esFunctionSymbol },
        { path: '/js/es6/esFunctionSetAndMap', component: esFunctionSetAndMap },
        { path: '/js/es6/esFunctionReflect', component: esFunctionReflect },
        { path: '/js/es6/esFunctionPromise', component: esFunctionPromise },
        { path: '/js/es6/esFunctionGenerator', component: esFunctionGenerator },
        { path: '/js/es6/esFunctionAsync', component: esFunctionAsync },
        { path: '/js/es6/esFunctionClass', component: esFunctionClass }
      ]
    },
    {
      path: '/js/functionOther',
      redirect: '/js/functionOther/lazyLayout',
      component: functionOther,
      children: [
        { path: '/js/functionOther/lazyLayout', component: lazyLayout },
        { path: '/js/functionOther/eventTaggle', component: eventTaggle },
        { path: '/js/functionOther/dataObserver', component: dataObserver },
        { path: '/js/functionOther/dataType', component: dataType },
        { path: '/js/functionOther/orderAlgorithm', component: orderAlgorithm },
        { path: '/js/functionOther/grammar', component: grammar },
        { path: '/js/functionOther/asyncHronous', component: asyncHronous },
        { path: '/js/functionOther/throAnddeb', component: throAnddeb }
      ]
    }
  ]
})

export default router
