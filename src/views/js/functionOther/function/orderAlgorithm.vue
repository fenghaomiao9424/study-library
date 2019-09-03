<template>
  <div class="page-function-order">
    <h4>1.排序算法</h4>
    <p>1.冒泡排序</p>
    <pre class="code-content">
function order(arr) {
  for (let i = 0; i 小于 arr.length; i ++) {
    for (let j = 0; j 小于 arr.length -i ; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}
let arr = [1,3,1,5,4,7,5,8]
order(arr)
</pre>
    <h4>2.分解质因数</h4>
    <pre class="code-content">
function fn(num) {
  var i = 2
  var res = []
  var n = num
  while(n >= i) {
    if (n%i === 0) {
      res.push(i)
      n = Math.floor(n / i)
    } else {
      i++
    }
  }
  console.log(res)
}
</pre>
    <h4>3.输出1-1000之内的所有质数</h4>
    <pre class="code-content">
function test () {
  for (let i = 2; i 小于 1000; i++) {
    let isZhishu = true
    for (let j = 2; j 小于等于 i/2; j++) {
        if (i % j === 0) {
          isZhishu = false
        }
    }
    if (isZhishu) {
      console.log(i)
    }
  }
}
</pre>
    <!-- 获取文本中所有元素类型及统计数量 -->
    <h4>4.获取文本中所有元素类型及统计数量</h4>
    <p>1.递归实现</p>
    <pre class="code-content">
var map = {}
function getNode(node) {
  if (node.nodeType === 1) {
    let nodeName = node.nodeName
    map[nodeName] = map[nodeName] ? map[nodeName] + 1 : 1
  }
  var children = node.childNodes
  if (children.length) {
    for (let i = 0 ; i 小于 children.length ; i ++) {
          getNode(children[i])
    }
  }
}
getNode(document.body)
console.log(map)
</pre>
    <p>2.非递归实现</p>
    <pre class="code-content">
function getNode() {
  let stack = []
  let map = {}
  stack.push(document.body)
  while(stack.length) {
    let node = stack.pop()
    let nodeName = node.nodeName
    map[nodeName] = map[nodeName] ? map[nodeName] + 1 : 1
    if (node.children.length) {
      for(let i=0; i 小于 node.children.length; i++) {
        stack.push(node.children[i])
      }
    }
  }
  return map
}
</pre>
    <h4>5.深度优先遍历及广度优先遍历实现遍历一个树形结构</h4>
    <pre class="code-content">
let tree = {
  id: 1,
  children: [
    {
      id: 2,
      children: [
        {
          id: 5
        }
      ]
    },
    {
      id: 3
    },
    {
      id: 4,
      children: [
        {
          id: 6
        },
        {
          id: 7
        }
      ]
    }
  ]
}
</pre>
    <p>1.深度优先</p>
    <pre class="code-content">
function getNode(tree) {
  let stack = []
  let result = []
  stack.push(tree)
  while (stack.length) {
    let node = stack.pop()
    result.push(node.id)
    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i])
      }
    }
  }
  console.log(result)
}
//[1, 2, 5, 3, 4, 6, 7]
</pre>
    <p>2.广度优先</p>
    <pre class="code-content">
function getNode(tree) {
  let stack = []
  let result = []
  stack.push(tree)
  while (stack.length) {
    let node = stack.shift()
    result.push(node.id)
    if (node.children) {
      for (let i = 0; i 小于 node.children.length; i++) {
        stack.push(node.children[i])
      }
    }
  }
  console.log(result)
}
//[1, 2, 3, 4, 5, 6, 7]
</pre>
  </div>
</template>
<script>
export default {
  name: 'page-function-order',
  data () {
    return {
      tree: {
        id: 1,
        children: [
          {
            id: 2,
            children: [
              {
                id: 5
              }
            ]
          },
          {
            id: 3
          },
          {
            id: 4,
            children: [
              {
                id: 6
              },
              {
                id: 7
              }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    let stack = []
    let result = []
    stack.push(this.tree)
    while (stack.length) {
      let node = stack.shift()
      result.push(node.id)
      if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
          stack.push(node.children[i])
        }
      }
    }
    console.log(result)
  }
}
</script>
