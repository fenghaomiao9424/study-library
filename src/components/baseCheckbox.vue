<template>
  <div class="base-checkbox">
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  </div>
</template>
<script>
export default {
  name: 'base-checkbox',
  props: ['value'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less">
</style>
