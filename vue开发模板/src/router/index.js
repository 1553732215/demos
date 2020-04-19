// 手动添加路由

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import News from './news/index'
// Vue.use(VueRouter)
// const routes = [...News]
// const router = new VueRouter({
//   routes,
// })
// export default router


// 自动扫描子模块路由并导入
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = []

const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 不处理
  if (route.startsWith('./index')) {
    return 
  }
  const routerModule = routerContext(route)
  /**
   * 兼容 import export 和require module.export 两种规范
   */
  routes = [...routes, ...(routerModule.default || routerModule)]
})

export default new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: routes
})


