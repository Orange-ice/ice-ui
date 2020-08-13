<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
       <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name:'IcePopover',
  data(){
    return {visible:false}
  },
  methods:{
    xxx(){
      this.visible = !this.visible
      if(this.visible === true){
        this.$nextTick(()=>{
          document.body.appendChild(this.$refs.contentWrapper)
          const {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
          const eventHandle = ()=>{
            this.visible = false
            console.log('document 隐藏 popover')
            document.removeEventListener('click',eventHandle)
          }
          document.addEventListener('click',eventHandle)
        })
      }else {
        console.log('vm 隐藏 popover')
      }
    }
  }
}
</script>
<style scoped lang="scss">
.popover{
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper{
  position: absolute;
  border: solid 1px red;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  transform: translateY(-100%);
}
</style>