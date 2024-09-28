import { createApp } from 'vue'
import App from './App.vue'
import Forms from "@/components/Forms.vue";

const app = createApp(Forms);

app.directive('style', (el, prop) => {
    console.log(`el`, el)
    console.log(`prop`, prop)

    el.style[prop.arg] = prop.value
})

app.mount('#app')
