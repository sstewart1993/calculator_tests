import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {

  let wrapper = shallowMount(App)

  it('enterNum changes running total', () => {
    // wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })


it('should be able to add 1, 4 to get 5', () => {
  // wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 4
  wrapper.vm.add(1);
  expect(wrapper.vm.runningTotal).to.equal(5)
})
it('should be 7 minus 4 to get 3', () => {
  wrapper.vm.previousTotal = 7;
  wrapper.vm.subtract(4);
  expect(wrapper.vm.runningTotal).to.equal(3)
})
it('should be 3 multiply 5 to get 15', () => {
  wrapper.vm.previousTotal = 3;
  wrapper.vm.multiply(5);
  expect(wrapper.vm.runningTotal).to.equal(15)
})
it('should be able to divide 21 by 7 to get 3', () => {
  wrapper.vm.previousTotal = 21;
  wrapper.vm.divide(7);
  expect(wrapper.vm.runningTotal).to.equal(3)
})
it('should be numberClick', () => {
  wrapper.vm.previousTotal = 0
  wrapper.vm.numberClick(1);
  wrapper.vm.numberClick(0);
  expect(wrapper.vm.runningTotal).to.equal(10)
})
it('should be operatorClick', () => {
  wrapper.vm.clearClick();
  wrapper.vm.numberClick('1')
  wrapper.vm.operatorClick('+')
  wrapper.vm.numberClick('6')
  wrapper.vm.operatorClick('-')
  wrapper.vm.numberClick('4')
  wrapper.vm.operatorClick('=')
  expect(wrapper.vm.runningTotal).to.equal(3)
})
it('clear operatorClear', () => {
  wrapper.vm.clearClick();
  wrapper.vm.numberClick('1')
  wrapper.vm.operatorClick('+')
  wrapper.vm.numberClick('6')
  wrapper.vm.operatorClick('=')
  expect(wrapper.vm.runningTotal).to.equal(7)
  wrapper.vm.clearClick();
  expect(wrapper.vm.runningTotal).to.equal(0)





})







})