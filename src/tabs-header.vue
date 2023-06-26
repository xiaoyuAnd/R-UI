<template>
  <div class="tabsHead" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="tabsHeadIcon">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs-head",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (name, vm) => {
      let { width, bottom, left, right } = vm.$el.getBoundingClientRect();
      const x = this.$refs.head.getBoundingClientRect().x;
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - x}px`;
      // this.$refs.line.style.left = `${left-x}px`
    });
  },
  // this.eventBus.$on('update:selected', (itemName, vm) => {
  //   let {width, left} = vm.$el.getBoundingClientRect()
  //   let headLeft =  this.$refs.head.getBoundingClientRect().x
  //   this.$refs.line.style.width = `${width}px`
  //   this.$refs.line.style.left = `${left - headLeft}px`
  // })
};
</script>

<style scoped lang="scss">
.tabsHead {
  display: flex;
  height: 36px;
  border-bottom: 1px solid #ddd;
  justify-content: left;
  align-items: center;
  position: relative;
  > .tabsHeadIcon {
    margin-left: auto;
    margin-right: 5em;
  }
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid #3eaf7c;
    transition: all 350ms;
  }
}
</style>