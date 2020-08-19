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
<i-input placeholder="请输入内容"></i-input>
<i-input value="默认内容"></i-input>
<i-input disabled value="默认内容"></i-input>
<i-input error="用户名不低于两个字"></i-input>

<!--可支持数据绑定-->
<i-input v-model="value"></i-input>
<p>value: {{value}}</p>
```