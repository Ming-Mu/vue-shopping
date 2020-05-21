//导包
import Vue from 'vue'
//导入有赞
import Vant from 'vant'
//导入有赞的css
import 'vant/lib/index.css'
//主要项目框架
import App from './App.vue'
//路由的配置文件
import router from './router'

Vue.use(Vant);//使用所有的组件
Vue.config.productionTip = true

// 作用
// 1.导入组件或者相关的框架
// 2.创建vue对象及指定路由或者渲染器
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
