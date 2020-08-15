<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="loading" @click="loading=!loading">默认按钮</g-button>
  </div>
</template>
<script>
import Button from '../../../src/button'
export default {
  components:{'g-button':Button},
  data(){
    return{
      loading:true
    }
  }
}
</script>
<style>
div{
  margin-top: 10px;
}
</style>