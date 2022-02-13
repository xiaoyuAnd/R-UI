<template>
  <div class="wrapper" :class="{'error':error}">
    <input type="text" :placeholder="value" :disabled="disabled" :readonly="readonly"
           @change="$emit('change',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
    >
    <template v-if="error">
      <g-icon name="error" class="icon-error"></g-icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
    }
  }
}
</script>

<style scoped lang="scss">
//$height: 32px;
//$border-color: #999;
//$border-color-hover: #666;
.wrapper {
  font-size: 12px;
  display: inline-block;
  align-items: center;

  > * {
    margin-right: .5em;

    &:last-child {
      margin-right: 0;
    }
  }

  > input {
    height:32px;
    border-radius: 4px;
    border: 1px solid #999;
    padding: 0 5px;
    outline: none;
    font-size: inherit;

    &:hover {
      border-color: #666;
    }

    &:focus {
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }

    &[disabled], &[readonly] {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }

  &.error {
    > input {
      border-color: #f1453D;
    }
  }

  .icon-error {
    fill: #f1453D;
  }

  .error-message {
    color: #f1453D;
  }
}
</style>