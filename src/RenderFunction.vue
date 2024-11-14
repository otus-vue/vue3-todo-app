<script>
import { defineComponent, h, ref } from "vue";

export default defineComponent({
  setup() {
    const text = ref('init text')

    function changeText() {
      console.log('clicked')
      text.value = 'new value'
    }


    return () => {
      return h('div',
          {
            'onClick': changeText
          },
          h('div',
              h('p', text.value)
          ))
    }
  }
})
</script>

<style scoped>

</style>