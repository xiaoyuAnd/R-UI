<template>
  <div class="grid-wrapper">
    <g-row >
      <g-col span="2" class="item">12</g-col>
      <g-col span="10" offset="2" class="item">12</g-col>
      <g-col span="8" offset="2" class="item">12</g-col>
    </g-row>
    <g-row>
      <g-col span="2" class="item">1</g-col>
      <g-col span="6" offset="4" class="item">2</g-col>
      <g-col span="6" offset="6" class="item">3</g-col>
    </g-row>
    <g-row>
      <g-col span="2" class="item">1</g-col>
      <g-col span="2" offset="6" class="item">2</g-col>
      <g-col span="6" offset="8" class="item">3</g-col>
    </g-row>
    <!--    <g-row gutter="10">-->
    <!--      <g-col>1</g-col>-->
    <!--      <g-col>2</g-col>-->
    <!--    </g-row>-->
    <!--    <g-row gutter="20">-->
    <!--      <g-col span="2">12</g-col>-->
    <!--      <g-col span="22">12</g-col>-->

    <!--    </g-row>-->
    <!--    <g-row>-->
    <!--      <g-col>1</g-col>-->
    <!--      <g-col>2</g-col>-->
    <!--    </g-row>-->
    <!--    <g-row>-->
    <!--      <g-col span="2">12</g-col>-->
    <!--      <g-col span="22">12</g-col>-->

    <!--    </g-row>-->
  </div>
</template>

<script>
import Row from '../../../src/row'
import Col from '../../../src/col'

export default {
  name: "Grid-offset",
  components: {
    'g-row': Row,
    'g-col': Col
  }
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.grid-wrapper {
  $background: #3eaf7c;

  > .row {
    padding: .2em;

    > .item {
      text-align: center;
      color: white;

      &:nth-child(odd) {
        background: $background;
      }

      &:nth-child(even) {
        background: lighten($background, 20%);
        color: black;
      }
    }
  }
}
</style>