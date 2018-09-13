import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import i18n from '../lang-i18n';
import store from '../store';
import whiteList from './whiteList'
Vue.use(Router);

const router = new Router({
  mode: 'hash',
  // linkActiveClass: 'open active',
  routes: [
    {
      path: '/',name: 'main',redirect: '/item1',
      component: () => import('@/views/layout'),
      children: [{
        path: '/item1',name: 'item1',redirect: '/item1/op2',
        component: {render (h) { return h('router-view') }},
        children: [{
          path: '/item1/op2',name: 'op2',
          component: () => import('@/views/testview/testcom'),
        }]

      }]
    },
    { path: '/login', component: () => import('@/views/login/index')}
  ]
});



router.beforeEach((to, from, next) => {
  NProgress.start();
  if (store.getters.token) { // 判断是否有token
    next();
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next('/login') ;
      NProgress.done() // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }
});

router.afterEach(() => {
  NProgress.done() // 结束Progress
});







export default router;
