<template>
  <div>
        <g-tabs :selected.sync="selectedTab"  direction="horizontal">
            <g-tabs-head>
                <g-tabs-item name="Tab1" >
                    <g-icon name="settings"></g-icon>
                    Tab 1
                </g-tabs-item>
                <g-tabs-item name="Tab2" >
                  Tab 2
                </g-tabs-item>
                <g-tabs-item name="Tab3">
                  Tab 3
                </g-tabs-item>
               <g-tabs-item name="Tab4">
                Tab 4
               </g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="Tab1">
                  Tab1
                </g-tabs-pane>
                <g-tabs-pane name="Tab2" >
                  Tab2
                </g-tabs-pane>
                <g-tabs-pane name="Tab3">
                  Tab3
                </g-tabs-pane>
              <g-tabs-pane name="Tab4">
                Tab4
              </g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    <script src="//at.alicdn.com/t/font_3115307_d6qqxb99ave.js"></script>

  </div>
<!--  <script src="//at.alicdn.com/t/font_3115307_d6qqxb99ave.js"></script>-->
</template>

<script>

import Tabs from "../../../src/tabs";
import Header from "../../../src/tabs-header";
import Body from "../../../src/tabs-body";
import Item from "../../../src/tabs-item";
import Pane from "../../../src/tabs-pane";
import Icon from "../../../src/icon"


export default {
  name: "Tabs",
  components:{
    'g-tabs':Tabs,
    'g-tabs-head':Header,
    'g-tabs-body':Body,
    'g-tabs-item':Item,
    'g-tabs-pane':Pane,
    'g-icon':Icon
  },
  data() { return { selectedTab: 'Tab1' } }
}
</script>

<style scoped>
.icon {width: 1em;height: 1em;vertical-align: -0.15em;fill: currentColor;overflow: hidden;}

</style>