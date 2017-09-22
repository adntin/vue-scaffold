// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

// 共享sessionStorage
(() => {
  if (!sessionStorage.length) {
    localStorage.setItem('initSessionStorage', Date.now())
  }
  window.addEventListener('storage', (event) => {
    if (event.key === 'initSessionStorage') {
      localStorage.setItem('setSessionStorage', JSON.stringify(sessionStorage))
      localStorage.removeItem('setSessionStorage')
    } else if (event.key === 'setSessionStorage' && !sessionStorage.length) {
      const data = JSON.parse(event.newValue)
      for (let key in data) {
        sessionStorage.setItem(key, data[key])
      }
    }
  })
})()
