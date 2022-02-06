import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group"
import Input from "./input"
import Row from "./row";
import Col from "./col";
import Layout from "./layout"
import Header from "./header";
import Content from "./content";
import Sider from "./sider";
import Footer from "./footer";
import Tabs from "./tabs";
import TabsHead from "./tabs-header";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";
import TabsBody from "./tabs-body";


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
// Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-tabs-body',TabsBody)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message:'hi'
    },
    methods:{
        inputChange(){
            console.log('change')
        }
    }
})