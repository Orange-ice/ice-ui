---
title: Button 按钮
---
# Button 按钮

**使用方法**

基本用法：

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

示例代码：

```vue
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="loading" @click="loading=!loading">默认按钮</g-button>
```