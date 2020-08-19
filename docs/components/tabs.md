---
title: Tabs 标签页
---
# Tabs 标签页

**使用方法**

#### 基本用法

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

#### 示例代码

```vue
data() {
    return {
      selected: '1',
    }
},

<i-tabs :selected="selected">
    <i-tabs-head>
      <i-tabs-item name="1">标题一</i-tabs-item>
      <i-tabs-item disabled name="2">标题二</i-tabs-item>
      <i-tabs-item name="3">标题三</i-tabs-item>
    </i-tabs-head>
    <i-tabs-body>
      <i-tabs-pane name="1">内容1</i-tabs-pane>
      <i-tabs-pane name="2">内容2</i-tabs-pane>
      <i-tabs-pane name="3">内容3</i-tabs-pane>
    </i-tabs-body>
</i-tabs>
```