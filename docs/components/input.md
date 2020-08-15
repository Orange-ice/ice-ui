---
title: Input 输入框
---
# Input 输入框

**使用方法**

#### 基本用法：

<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

<br>

#### 示例代码：

```vue
<g-input placeholder="请输入内容"></g-input>
<g-input value="默认内容"></g-input>
<g-input disabled value="默认内容"></g-input>
<g-input error="用户名不低于两个字"></g-input>

<!--可支持数据绑定-->
<g-input v-model="value"></g-input>
<p>value: {{value}}</p>
```