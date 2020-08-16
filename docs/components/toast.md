---
title: Toast 文字提示
---
# Toast 文字提示

**使用方法**

### this.$toast

#### 预览

<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

#### 示例代码

```vue
  <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
  <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
  <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```

### 设置关闭按钮

#### 预览

<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

#### 示例代码

```vue
<template>
    <div>
      <g-button @click="onClickButton">上方弹出</g-button>
    </div>
</template>
<script>
export default {
methods: {
    onClickButton () {
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    }
  },
}
</script>
```

### 支持传入 HTML

#### 预览

<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

#### 示例代码

```vue
<template>
    <div>
      <g-button @click="onClickButton">上方弹出</g-button>
    </div>
</template>
<script>
export default {
  methods: {
    onClickButton () {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      })
    }
  },
}
</script>
```