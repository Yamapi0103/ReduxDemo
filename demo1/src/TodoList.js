import React, { Component } from 'react'; // 快捷鍵:imrc
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {  // 快捷鍵:ccc

  constructor(props) {
    super(props)
    console.log(store.getState())
    this.state = store.getState()
  }

  render () {
    return (
      <div>
        <div style={{ margin: '10px' }}>
          <Input placeholder={this.state.inputValue} style={{ width: '250px', marginRight: '10px' }} />
          <Button type="primary">增加</Button>
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