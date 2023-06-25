<template>
  <button
    class="g-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon";
export default {
  name: "Button",
  components: { "g-icon": Icon },
  // props:['icon','iconPosition']
  props: {
    icon: [],
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value !== "left" && value !== "right" ? false : true;
      },
    },
  },
};
</script>

<style scoped lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*:root {--button-height: 32px;--font-size: 14px;--button-bg:
          white;--border-radius: 4px;--button-active-bg: #eee;--color: #333;
          --border-color: #999;--border-color-hover: #666;}*/
.g-button {
  font-size: 14px;
  height: 32px;
  padding: 0 1em;
  border-radius: 4px;
  border: 1px solid #999;
  background: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    background: #666;
  }
  &:active {
    background: #eee;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
    margin-left: 0;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 3s infinite linear;
  }
}
</style>