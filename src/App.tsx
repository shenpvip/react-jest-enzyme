/*
 * @Author: shenpeng 
 * @Date: 2019-03-21 11:11:19 
 * @Last Modified by:   shenpeng 
 * @Last Modified time: 2019-03-21 11:11:19 
 */
import React, { PureComponent } from 'react'
import AddItem from './components/AddItem'
import './App.css'
interface IState {
  list: string[]
}
class App extends PureComponent<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      list: []
    }
  }
  public addList = (val: string) => {
    const list = [...this.state.list]
    list.push(val)
    this.setState({
      list
    })
  }
  public render() {
    const { list } = this.state
    return (
      <div className="App">
        <AddItem onAddClick={this.addList} />
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App
