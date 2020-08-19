---
title: Button 按钮
---
# Button 按钮

**使用方法**

#### 基本用法：

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

#### 示例代码：

```vue
<i-button>默认按钮</i-button>
<i-button icon="settings">默认按钮</i-button>
<i-button :loading="loading" @click="loading=!loading">默认按钮</i-button>
```