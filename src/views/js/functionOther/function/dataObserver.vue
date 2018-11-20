<template>
  <input />
</template>
<script>
export default {
  name: 'page-function-dataObserver',
  data () {
    return {
    }
  },
  mounted () {
    console.log(document.getElementsByTagName('input')[0])
    document.getElementsByTagName('input')[0].addEventListener('change', () => {
      console.log(123)
    })
  }
}
</script>
