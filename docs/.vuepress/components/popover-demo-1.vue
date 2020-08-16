<template>
  <div style="padding-top: 16px;">

    <g-popover position="left">
      <g-button>左边弹出</g-button>
      <template slot="content">
        <strong style="color: #F1453D">加粗的提示</strong>
      </template>
    </g-popover>
    <g-popover>
      <g-button>上方弹出</g-button>
      <template slot="content">
        <a href="https://github.com/Orange-ice/Ice-UI">这是个a链接</a>
      </template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content">
        普通文本内容
      </template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹出</g-button>
      <template slot="content">
        普通文本内容
      </template>
    </g-popover>

  </div>
</template>

<script>
import GButton from '../../../src/button'
import GPopover from '../../../src/popover'
export default {
  components: {GButton, GPopover},
}
</script>
<style>
.ice-popover{
  z-index: 30;
}
</style>