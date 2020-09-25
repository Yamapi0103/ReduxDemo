import React, { Component } from 'react'; // 快捷鍵:imrc
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'

import TodoListUI from './TodoListUI'
class TodoList extends Component {  // 快捷鍵:ccc

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  changeInputValue (e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  storeChange () {
    this.setState(store.getState())
  }

  clickBtn () {
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem (index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  render () {
    return (
      <TodoListUI 
      inputValue={this.state.inputValue}
      changeInputValue={this.changeInputValue}
      clickBtn={this.clickBtn}
      list={this.state.list}
      deleteItem={this.deleteItem}
      />
    );
  }
}

export default TodoList;