<template>
  <div class="wrapper">
    <g-layout class="layout-wrapper">
      <g-header class="header-wrapper"> header</g-header>
      <g-layout class="layout-wrapper">
        <g-sider class="sider-wrapper"> sider</g-sider>
        <g-content class="content-wrapper"> content</g-content>
      </g-layout>
      <g-footer class="footer-wrapper"> footer</g-footer>
    </g-layout>

    <br>
    <g-layout class="layout-wrapper">
      <g-header class="header-wrapper"> header</g-header>
      <g-content class="content-wrapper"> content</g-content>
      <g-footer class="footer-wrapper"> footer</g-footer>
    </g-layout>
    <br>

<!--    <g-layout class="layout-wrapper">-->
<!--      <g-header class="header-wrapper"> header</g-header>-->
<!--      <g-layout class="layout-wrapper">-->
<!--        <g-sider class="sider-wrapper"> sider</g-sider>-->
<!--        <g-layout class="layout-wrapper">-->
<!--          <g-content class="content-wrapper"> content</g-content>-->
<!--          <g-footer class="footer-wrapper"> footer</g-footer>-->
<!--        </g-layout>-->
<!--      </g-layout>-->
<!--    </g-layout>-->
  </div>
</template>

<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Footer from '../../../src/footer'
import Sider from '../../../src/sider'
import Content from '../../../src/content'

export default {
  name: "layout",
  components: {
    "g-layout": Layout,
    "g-header": Header,
    "g-footer": Footer,
    "g-content": Content,
    "g-sider": Sider

  }
}
</script>

<style scoped lang="scss">
$background: #3eaf7c;
.wrapper {
  > .layout-wrapper {
    height: 30vh;
    overflow: hidden;

    > .header-wrapper {
      height: 3em;
      background: $background;
    }

    > .content-wrapper {
      background: lighten($background, 40%);

    }

    > .layout-wrapper {
      height: 6em;

      > .sider-wrapper {
        width: 3em;
        background: lighten($background, 15%);
      }

      > .content-wrapper {
        background: lighten($background, 40%);
      }

      > .layout-wrapper {

        > .content-wrapper {
          flex-grow: 1;
          height: 10px;
          background: lighten($background, 40%);
        }

        > .footer-wrapper {
          background: $background;
        }
      }
    }

    > .footer-wrapper {
      background: $background;
    }
  }
}

</style>