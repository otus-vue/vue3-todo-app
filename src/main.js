import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.directive('css', (el, bindings, vnode, prevVnode) => {
  console.log('el', el)
  console.log('bindings', bindings)
  console.log('vnode', vnode)
  console.log('prevVnode', prevVnode)

  el.style[bindings.arg] = bindings.value
})
app.mount('#app')
