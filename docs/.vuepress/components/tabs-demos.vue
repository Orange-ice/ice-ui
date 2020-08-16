<template>
  <div style="margin-top: 10px">
    <div>
      <g-tabs :selected="selected1">
        <g-tabs-head>
          <g-tabs-item name="1">标题一</g-tabs-item>
          <g-tabs-item name="2">标题二</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="1">内容1</g-tabs-pane>
          <g-tabs-pane name="2">内容2</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>

    <div style="margin-top: 20px">
      <g-tabs :selected="selected2">
        <g-tabs-head>
          <g-tabs-item name="1">标题一</g-tabs-item>
          <g-tabs-item disabled name="2">标题二</g-tabs-item>
          <g-tabs-item name="3">标题三</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="1">内容1</g-tabs-pane>
          <g-tabs-pane name="2">内容2</g-tabs-pane>
          <g-tabs-pane name="3">内容3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsBody from '../../../src/tabs-body'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'

export default {
  data() {
    return {
      selected1: '1',
      selected2: '1'
    }
  },
  components: {
    'g-tabs': Tabs,
    'g-tabs-head': TabsHead,
    'g-tabs-body': TabsBody,
    'g-tabs-item': TabsItem,
    'g-tabs-pane': TabsPane,
  }
}
</script>