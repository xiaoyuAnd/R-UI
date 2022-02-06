<template>
  <div class="tabsItem" @click="onclick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs-item",
  data() {
    return {
      active: false
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      require: true
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected',
        (name) => {
          this.active = name === this.name
          console.log(name)

        })
  },
  methods: {
    onclick() {
      if(this.disabled){return}
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style scoped lang="scss">
.tabsItem {
  height: 100%;
  display: flex;
  padding: 0 2em;
  align-items: center;

  &.active {
    color: #3eaf7c;
  }
  &.disabled{
    color: gray;
    cursor: not-allowed;
  }
}


</style>