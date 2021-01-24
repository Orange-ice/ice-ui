<template>
  <div>
    {{sourceItem.name}}
    <cascader-item
      v-for="item in sourceItem.children"
      v-if="sourceItem.children"
      :source-item="item"
    ></cascader-item>
  </div>
</template>

<script>
const cascaderItem = {
  name: 'cascaderItem',
  components: {
    cascaderItem: cascaderItem
  },
  props: {
    sourceItem: {
      type: Object
    }
  }
}
export default cascaderItem
</script>

<style lang="scss" scoped></style>