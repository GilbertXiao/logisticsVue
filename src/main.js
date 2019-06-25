// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
//for ie
import "babel-polyfill";
Vue.config.productionTip = false;

//当页面跳转时，会触发该方法
//to 去哪个页面
//from 从哪个页面来
//next表示继续执行的函数
router.beforeEach((to, from, next) => {
  if(to.path=='/'||window.localStorage.getItem("user")){
    next();
  }else{
    next("/");
  }
})
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
