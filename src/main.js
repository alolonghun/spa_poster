import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import $ from 'jquery'
import './config/rem'
import axios from 'axios'
import MyMethods from './config/methods'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$md = MyMethods
Vue.use(MintUI)

axios({
  url: '/xzdd/getUrlConfig',
  method: 'get',
  dataType: 'json',
  params: {
    url: window.location.href.substring(0, window.location.href.lastIndexOf('#'))
  }
}).then(function(data) {
    if (data && !data.code) {
      MyMethods.WXConfigInit(data.data);
    } else {
      console.log(data.msg);
    }
  })
  .catch(function(err) {
    console.log(err);
  });

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
