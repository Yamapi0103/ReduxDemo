import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux'
class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} />
          <button>提交</button>
        </div>
        <ul>
          <li>Joshua</li>
        </ul>
      </div>
    );
  }
}

const stateToProps = (state)=>{
  return {
    inputValue:state.inputValue
  }
}

export default connect(stateToProps, null)(TodoList)