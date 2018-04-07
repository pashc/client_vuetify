import Vue from 'vue'
import Content from '@/components/Content'

describe('Content.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Content)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
