import { createApp } from 'vue'
import App from './App.vue'
import MyText from "@/components/MyText.vue";

const app = createApp(App)

app.directive('css',
    (el, bindings, vnode, prevVNode) => {
        el.style[bindings.arg] = bindings.value
        console.log(`el`, el)
        console.log(`bindings`, bindings)
        console.log(`vnode`, vnode)
        console.log(`prevVNode`, prevVNode)
    }
)

app.mount('#app')
