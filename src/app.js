import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input'
import Col from './col'
import Row from './row'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message:'hello'
  },
  methods:{
    inputChange(e){
      console.log(e)
    }
  }
})