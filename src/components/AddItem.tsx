/*
 * @Author: shenpeng 
 * @Date: 2019-03-21 11:11:21 
 * @Last Modified by:   shenpeng 
 * @Last Modified time: 2019-03-21 11:11:21 
 */
import React, { PureComponent, ChangeEvent } from 'react'
const initialState = {
  inputVal: ''
}
interface IState {
  inputVal: string
}
interface IProps {
  onAddClick: (val: string) => void
}
export default class AddItem extends PureComponent<IProps, IState> {
  public readonly state: IState = initialState
  constructor(props: IProps) {
    super(props)
  }
  public onAddClick = () => {
    if (this.state.inputVal) {
      this.props.onAddClick(this.state.inputVal)
      this.setState({
        inputVal: ''
      })
    }
  }
  public onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputVal: e.target.value.trim()
    })
  }
  public render() {
    const { inputVal } = this.state
    return (
      <div>
        <input type="text" value={inputVal} onChange={this.onInputChange} />
        <button onClick={this.onAddClick}>添加</button>
      </div>
    )
  }
}
