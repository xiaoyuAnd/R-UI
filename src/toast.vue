<template>

  <div class="toast" :class="toastClasses">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <span class="line"></span>
    <span @click="onClickClose" v-if="closeButton">
      {{ closeButton.text }}
      {{ position }}
    </span>
  </div>


</template>

<script>
export default {
  name: "Toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: [Number, String],
      default: 3
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭', callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    }
    ,
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }
  ,
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes fade-down {
  0% {
    opacity: 0;
    transform:translateX(-50%) translateY(-36px);

  }
  100% {
    opacity: 1;
    transform:translateX(-50%) translateY(0);
  }
}
@keyframes fade-up {
  0% {
    opacity: 0;
    transform:translateX(-50%) translateY(0);

  }
  100% {
    opacity: 1;
    transform:translateX(-50%) translateY(-36px);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform:translateX(-50%) translateY(0);
  }
  100% {
    opacity: 1;
    transform:translateX(-50%) translateY(0);
  }
}
.toast {
  //animation: fade-down 1s;
  display: flex;
  position: fixed;
  left: 50%;
  $toast-bg: rgba(0, 0, 0, 0.75);
  color: #fff;
  background: $toast-bg;
  border-radius: 4px;
  padding: 8px 16px;
  box-shadow: 0 0 3px rgba(0, 0, 0, .5);

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > span {
    flex-shrink: 0;
  }

  .line {
    //height: 100%;
    margin: 0 16px;
    border-left: 2px solid #999;
  }

  &.position-top {
    top: 60px;
    transform: translateX(-50%);
    &.toast{
      animation: fade-down 1s;
    }
  }

  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
    &.toast{
      animation: fade-down 1s;
    }
  }

  &.position-middle {
    top: 50%;
    transform: translate(-50%);
    &.toast{
      animation: fade-in 1s;
    }
  }
}
</style>