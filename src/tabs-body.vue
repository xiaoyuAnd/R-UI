<template>
  <div class="tabsBody">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs-body",
  inject:['eventBus'],
  created() {
    // console.log("爷爷给body的eventBus")
    // console.log(this.eventBus)
  }
}
</script>

<style scoped lang="scss">
.tabsBody{
  margin-top: 2em;
}
</style>