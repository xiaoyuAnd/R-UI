<template>
  <div>
    111
  </div>
</template>
<script>
import Button from '../../../src/Button'

export default {
  components: {
    'g-button': Button
  },
  data () {
    return {
      content: `
          <g-button>默认按钮</g-button>
          <g-button icon="settings">默认按钮</g-button>
          <g-button :loading="true">默认按钮</g-button>
          <g-button disabled>默认按钮</g-button>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>