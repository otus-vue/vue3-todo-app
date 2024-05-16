import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('css', (
        el, binding,
        vnode, prevVNode) => {
        el.style[binding.arg] = binding.value

        console.log(`binding`, binding)
        console.log(`vnode`, vnode)
        console.log(`prevVNode`, prevVNode)
    }
)

app.mount('#app')
