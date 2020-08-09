<template>
  <div class="row" :style="{marginLeft:-gutter/2 + 'px',marginRight:-gutter/2 + 'px'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'IceRow',
  props:{
    gutter:{
      type:[Number,String]
    }
  },
  mounted() {
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter
    })
  }
}
const div = document.createElement('div');
const childDiv = document.createElement('div');

div.appendChild(childDiv)
document.body.appendChild(div)
</script>
<style lang="scss" scoped>
.row{
  display: flex;
}
</style>