---
title: Grid 栅格
---
# Grid 栅格

**使用方法**

### 24网格

#### 预览

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

#### 示例代码 

```vue
<i-row class="demoRow">
  <i-col span="8">
    <div class="demoCol">8</div>
  </i-col>
  <i-col span="8">
    <div class="demoCol">8</div>
  </i-col>
  <i-col span="8">
    <div class="demoCol">8</div>
  </i-col>
</i-row>
<i-row class="demoRow">
  <i-col span="6">
    <div class="demoCol">6</div>
  </i-col>
  <i-col span="6">
    <div class="demoCol">6</div>
  </i-col>
  <i-col span="6">
    <div class="demoCol">6</div>
  </i-col>
  <i-col span="6">
    <div class="demoCol">6</div>
  </i-col>
</i-row>
<i-row class="demoRow">
  <i-col span="4">
    <div class="demoCol">4</div>
  </i-col>
  <i-col span="4">
    <div class="demoCol">4</div>
  </i-col>
  <i-col span="4">
    <div class="demoCol">4</div>
  </i-col>
  <i-col span="4">
    <div class="demoCol">4</div>
  </i-col>
  <i-col span="4">
    <div class="demoCol">4</div>
  </i-col>
  <i-col span="4">
    <div class="demoCol">4</div>
  </i-col>
</i-row>
<i-row class="demoRow">
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
</i-row>
```

### 设置 gutter

#### 预览

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

#### 示例代码

```vue
<i-row class="demoRow" gutter="10">
  <i-col span="8">
    <div class="demoCol">8</div>
  </i-col>
  <i-col span="8">
    <div class="demoCol">8</div>
  </i-col>
  <i-col span="8">
    <div class="demoCol">8</div>
  </i-col>
</i-row>
<i-row class="demoRow" gutter="10">
  <i-col span="6">
    <div class="demoCol">6</div>
  </i-col>
  <i-col span="6">
    <div class="demoCol">6</div>
  </i-col>
  <i-col span="6">
    <div class="demoCol">6</div>
  </i-col>
  <i-col span="6">
    <div class="demoCol">6</div>
  </i-col>
</i-row>
```

### 设置空隙

#### 预览

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

#### 示例代码

```vue
<i-row class="demoRow" gutter="10">
  <i-col span="8">
    <div class="demoCol">8</div>
  </i-col>
  <i-col span="8" offset="8">
    <div class="demoCol">8</div>
  </i-col>
</i-row>
<i-row class="demoRow" gutter="10">
  <i-col span="6" offset="6">
    <div class="demoCol">6</div>
  </i-col>
  <i-col span="6" offset="6">
    <div class="demoCol">6</div>
  </i-col>
</i-row>
<i-row class="demoRow" gutter="10">
  <i-col span="4">
    <div class="demoCol">4</div>
  </i-col>
  <i-col span="4" offset="4">
    <div class="demoCol">4</div>
  </i-col>
  <i-col span="4" offset="8">
    <div class="demoCol">4</div>
  </i-col>
</i-row>
<i-row class="demoRow" gutter="10">
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2" offset="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2" offset="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2" offset="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2">
    <div class="demoCol">2</div>
  </i-col>
  <i-col span="2" offset="2">
    <div class="demoCol">2</div>
  </i-col>
</i-row>
```