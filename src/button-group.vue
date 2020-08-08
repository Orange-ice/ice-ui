<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'IceButtonGroup',
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`g-group-button 的子元素应该全是 g-button ，但你写的是${name}`)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.g-button-group {
  display: inline-flex;

  > .g-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }

    &:last-child {
      border-radius: 0 var(--border-radius) var(--border-radius) 0
    }

    &:hover {
      position: relative;
      z-index: 1
    }
  }
}
</style>