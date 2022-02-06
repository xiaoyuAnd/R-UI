<template>
  <div>
      <g-button :loading="loading1" @click="loading1 = !loading1">默认按钮</g-button>
      <g-button icon="settings" :loading="loading2" @click="loading2 = !loading2">默认按钮</g-button>
      <g-button icon="settings" icon-position="right" :loading="loading3" @click="loading3 = !loading3">默认按钮
      </g-button>
      <g-button icon="settings" :loading="!loading2" >默认按钮</g-button>

    <!--      <g-button-group>-->
<!--        <g-button icon="left">上一页</g-button>-->
<!--&lt;!&ndash;        <g-button>更多</g-button>&ndash;&gt;-->
<!--        <g-button icon="right" icon-position="right">下一页</g-button>-->
<!--      </g-button-group>-->


    <script src="//at.alicdn.com/t/font_3115307_d6qqxb99ave.js"></script>
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
      `.replace(/^ {8}/gm, '').trim(),
      loading1:false,
      loading2:false,
      loading3:false,
      message: 'hi',
      selectedTab:'sports'
    }
  }
}
</script>
<style>
.icon {width: 1em;height: 1em;vertical-align: -0.15em;fill: currentColor;overflow: hidden;}
</style>