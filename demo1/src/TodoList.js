import React, { Component } from 'react'; // 快捷鍵:imrc
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'


const data = [
  '早8點開晨會，分配今天的代碼任務',
  '早9點和項目經理開需求溝通會',
  '早9點和項目經理開需求溝通會'
]
class TodoList extends Component {  // 快捷鍵:ccc

  render () {
    return (
      <div>
        <div style={{ margin: '10px' }}>
          <Input placeholder="Write Something" style={{ width: '250px', marginRight: '10px' }} />
          <Button type="primary">增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;