<template>
  <div>
    <div class="easy">
      <g-input placeholder="请输入内容"></g-input>
      <g-input value="默认内容"></g-input>
      <g-input disabled value="默认内容"></g-input>
    </div>
    <div class="error">
      <g-input error="用户名不低于两个字"></g-input>
    </div>
    <div class="bindDate">
      <g-input v-model="value"></g-input>
      <p>value: {{value}}</p>
    </div>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
  components:{'g-input':Input},
  data(){
    return{
      value:'默认内容'
    }
  }
}
</script>
<style lang="scss">
div.easy{
  margin-top: 10px;
  margin-bottom: 8px;
  > input{
    margin-top: 8px;
  }
}

div.bindDate{
  margin-top: 8px;
  height: 64px;
}
</style>