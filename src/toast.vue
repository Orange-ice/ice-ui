<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
// 构造组件的选项
export default {
  name: 'IceToast',
  props:{
    autoClose:{
      type:Boolean,
      default:true
    },
    autoCloseDelay:{
      type:Number,
      default:5
    },
    closeButton:{
      type:Object,
      default(){
        return{
          text:'关闭',callback:undefined
        }
      }
    },
    enableHtml:{
      type:Boolean,
      default:false
    }
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods:{
    updateStyles(){  // 解决父元素设置了 min-height 之后，子元素 height:100% 没作用的问题
      this.$nextTick(()=>{
        this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },
    execAutoClose(){
      if(this.autoClose){
        setTimeout(()=>{
          this.close()
        },this.autoCloseDelay * 1000)
      }
    },
    close(){
      this.$el.remove()
      this.$destroy()
    },
    onClickClose(){
      this.close()
      if(this.closeButton && typeof this.closeButton.callback === 'function'){
        this.closeButton.callback(this)  // this === toast 实例 |  将toast实例传给callback，callback里就可调用toast里的方法
      }
    },
    log(){
      console.log('回调执行')
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;top: 0;left: 50%;transform: translateX(-50%);
  font-size: $font-size;color: #fff;min-height: $toast-min-height;line-height: 1.8;
  padding: 0 16px;
  display: flex;align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .message{
    padding: 8px 0;
  }
  .close{
    cursor: pointer;
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line{
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>