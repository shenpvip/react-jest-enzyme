/*
 * @Author: shenpeng 
 * @Date: 2019-03-21 11:11:33 
 * @Last Modified by:   shenpeng 
 * @Last Modified time: 2019-03-21 11:11:33 
 */
import { shallow } from 'enzyme'
import React from 'react'
import AddItem from 'components/AddItem'

const setup = () => {
  // 模拟 props
  const props = {
    // Jest 提供的mock 函数
    onAddClick: jest.fn()
  }

  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<AddItem {...props} />)
  return {
    props,
    wrapper
  }
}

describe('AddItem', () => {
  const { wrapper, props } = setup()

  // case1
  // 通过查找存在 Input,测试组件正常渲染
  it('AddItem Component should be render', () => {
    expect(wrapper.find('input').exists())
  })

  // case2
  // 如果输入框内有值，按下添加按钮执行props的onAddClick方法
  it('press button should call onAddClick if inputVal length greater than 0', () => {
    const mockEventObj = {
      key: 'change',
      target: {
        value: 'foo'
      }
    }
    wrapper.find('input').simulate('change', mockEventObj)
    wrapper.find('button').simulate('click')
    expect(props.onAddClick).toBeCalled()
  })
  it('When the button was pressed without text,onAddClick should not be called', () => {
    const mockEventObj = {
      key: 'change',
      target: {
        value: ''
      }
    }
    wrapper.find('input').simulate('change', mockEventObj)
    wrapper.find('button').simulate('click')
    expect(props.onAddClick).toBeCalled()
  })
})
