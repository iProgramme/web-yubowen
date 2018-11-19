import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/fullPage/css/jquery.fullPage.css'

import './common.less'
Vue.use(iView);
Vue.config.productionTip = false

console.log('当前浏览器版本：'+navigator.userAgent);
if(navigator.userAgent.includes('Mobile')){
    store.commit("setUserAgent",'Mobile')
    router.push({name:'index'}) // 跳到移动端页面
}else{
    store.commit("setUserAgent",'PC')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
