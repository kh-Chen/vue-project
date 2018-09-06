import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
Vue.use(Router);

// const constantRouterMap = [
//   { path: '/login', component: require('@/views/login/index'), hidden: true }
// ];

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/login', component: () => import('@/views/login/index')}
  ]
})
