import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import store from '../store';
import whiteList from './whiteList'
Vue.use(Router);

const router = new Router({
  mode: 'hash',
  // linkActiveClass: 'open active',
  routes: [
    {path: '/',name: 'HelloWorld',component: () => import('@/components/HelloWorld')},
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
