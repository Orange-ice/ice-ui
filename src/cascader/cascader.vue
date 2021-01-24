<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source">
        <cascader-item :source-item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import cascaderItem from '@/cascader/cascaderItem.vue'
export default {
  name: 'Cascader',
  components: { cascaderItem },
  props: {
    source: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped></style>