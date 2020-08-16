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
<g-row class="demoRow">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
</g-row>
```

### 设置 gutter

#### 预览

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

#### 示例代码

```vue
<g-row class="demoRow" gutter="10">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>
```

### 设置空隙

#### 预览

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

#### 示例代码

```vue
<g-row class="demoRow" gutter="10">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8" offset="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="6" offset="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6" offset="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4" offset="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4" offset="8">
    <div class="demoCol">4</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
</g-row>
```