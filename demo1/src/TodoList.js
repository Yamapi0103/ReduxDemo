import React, { Component } from 'react'; // 快捷鍵:imrc
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {  // 快捷鍵:ccc

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue=this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
    this.clickBtn = this.clickBtn.bind(this)
  }

  changeInputValue(e){
    const action ={
      type: 'changeInput',
      value: e.target.value
    }    
    store.dispatch(action)  
  }

  storeChange(){
    this.setState(store.getState())
  }

  clickBtn(){
    const action ={
      type:'addItem'
    }
    store.dispatch(action)
  }

  render () {
    return (
      <div>
        <div style={{ margin: '10px' }}>
          <Input 
            placeholder={this.state.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.changeInputValue}
            value={this.state.inputValue}
            />
          <Button 
            type="primary"
            onClick={this.clickBtn}
            >增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;