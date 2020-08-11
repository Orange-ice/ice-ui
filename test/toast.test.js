const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false
describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })
  describe('props',()=>{
    it('接收 autoClose',(done)=>{
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData:{
          autoClose:1,
        }
      }).$mount(div)
      vm.$on('close',()=>{
        expect(document.body.contains(vm.$el)).to.equal(false)
        done()
      })
    })
    // it('接收 closeButton',()=>{
    //   const callback = sinon.fake()
    //   const Constructor = Vue.extend(Toast)
    //   const vm = new Constructor({
    //     propsData:{
    //       closeButton:{
    //         text:'关闭',
    //         callback
    //       }
    //     }
    //   }).$mount()
    //   let closeButton = vm.$el.querySelector('.close')
    //   expect(closeButton.textContent.trim()).to.equal('关闭')
    //   closeButton.click()
    //   expect(callback).to.have.been.called
    // })
    it('接收 enableHtml',()=>{
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData:{enableHtml:true}
      })
      vm.$slots.default = ['<strong id="hihi">hi</strong>']
      vm.$mount()
      const strong = vm.$el.querySelector('#hihi')
      expect(strong).to.exist
    })
    it('接收 position',()=>{
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData:{
          position:'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.equal(true)
    })
  })
})