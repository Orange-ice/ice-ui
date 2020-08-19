---
title: Layout 布局
---
# Layout 布局

**使用方法**

### 布局一

#### 预览

<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 示例代码

```vue
<i-layout style="color: white; margin-bottom:50px;">
    <i-header style="height: 50px; background:lightskyblue;">
      header
    </i-header>
    <i-content style="height: 100px; background:deepskyblue;">
      content
    </i-content>
    <i-footer style="height: 50px; background:lightskyblue;">
      footer
    </i-footer>
</i-layout>
```

### 布局二

#### 预览

<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 示例代码

```vue
<i-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <i-header style="height: 50px; background:lightskyblue;">
      header
    </i-header>
    <i-layout>
      <i-sider style="height: 100px; background:#ddd; width:200px; color: black;">
        sider
      </i-sider>
      <i-content style="height: 100px; background:deepskyblue;">
        content
      </i-content>
    </i-layout>
    <i-footer style="height: 50px; background:lightskyblue;">
      footer
    </i-footer>
</i-layout>
```

### 布局三

#### 预览

<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 示例代码

```vue
<i-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <i-sider style=" background:#ddd; width:200px; color: black;">
      sider
    </i-sider>
    <i-layout>
      <i-header style="height: 50px; background:lightskyblue;">
        header
      </i-header>
      <i-content style="height: 100px; background:deepskyblue;">
        content
      </i-content>
      <i-footer style="height: 50px; background:lightskyblue;">
        footer
      </i-footer>
    </i-layout>
</i-layout>
```