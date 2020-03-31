import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test'
import './style.css';


class TodoList extends Component {
  constructor(props) {
    // 继承父类中的参数
    super(props);
    // 当组件的state或者props发生改变的时候，render()就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    const value = e.target.value;
    // setState()中传递一个函数，是异步操作，无法正确读出value值
    this.setState(() => ({
        inputValue: value
      }))
  }

  // 新增
  handleBtnClick() {
    // this.setState({
    //   list: [...this.state.list ,this.state.inputValue],
    //   inputValue: ''
    // })
    this.setState((prevState) => ({
        list: [...prevState.list , prevState.inputValue],
        inputValue: ''
    }))
  }

  // 删除
  handleItemDelete(index) {
    // 复制list数组
    // const list = [...this.state.list];
    // splice():删除数组中的元素，每次删除一个
    // list.splice(index, 1)
    // this.setState({
    //   list: list
    // })
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }

  getTodoItem() {
    return  this.state.list.map((item, index) => {
      // TodoItem 是 TodoList 的子组件，父组件将参数，方法传递给子组件，子组件调用参数，方法来渲染页面
      return (
        <TodoItem 
          key={index}
          item={item} 
          index={index} 
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  render() {
    console.log('render')
    return (
      <Fragment>
        <div>
          <label htmlFor='insert'>输入内容</label>
        {/* bind(this):重定向this指向 */}
          <input 
            id='insert' 
            className='input' 
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button 
            onClick={this.handleBtnClick}
          >
            提交
          </button>
        </div>
        <ul>      
            {this.getTodoItem()}
        </ul>
        <Test item={this.state.inputValue} />
      </Fragment>
    );
  }
}

export default TodoList;
