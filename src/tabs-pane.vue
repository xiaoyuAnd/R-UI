<template>
  <div class="tabsPane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs-pane",
  inject: ["eventBus"],
  data() {
    return {
      active: false,
      // active:true
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
      };
    },
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      require: true,
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },
};
</script>

<style scoped lang="scss">
</style>