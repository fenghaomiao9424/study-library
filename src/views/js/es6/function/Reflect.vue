<template lang="jade">
    .page-function-es6-Reflect
      h4 1.概述
      p  ES6 为了操作对象而提供的新 API
      h4 2.Reflect对象一共有 13 个静态方法
      p  Reflect.apply(target, thisArg, args)
      p  Reflect.construct(target, args)
      p  Reflect.get(target, name, receiver)
      p  Reflect.set(target, name, value, receiver)
      p  Reflect.defineProperty(target, name, desc)
      p  Reflect.deleteProperty(target, name)
      p  Reflect.has(target, name)
      p  Reflect.ownKeys(target)
      p  Reflect.isExtensible(target)
      p  Reflect.preventExtensions(target)
      p  Reflect.getOwnPropertyDescriptor(target, name)
      p  Reflect.getPrototypeOf(target)
      p  Reflect.setPrototypeOf(target, prototype)
</template>
<script>
export default {
  name: 'page-function-es6-Reflect',
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
.page-function-es6-Reflect {
}
</style>
