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

  handleInputChange() {
    // this.setState({
    //   inputValue: e.target.value
    // })
    const value = this.input.value;
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
    // setState():是一个异步函数,会先执行43行代码,所以需要等到匿名函数执行完在执行一个回调函数
    this.setState((prevState) => ({
        list: [...prevState.list , prevState.inputValue],
        inputValue: ''
    }),() => {
      console.log(this.ul.querySelectorAll('li').length)  
    }) //回调函数
    // console.log(this.ul.querySelectorAll('li').length)
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

  // 在组件即将被挂载到页面的时刻自动执行
  componentWillMount() {
    console.log('componentWillMount')
  }

  // 在组件被挂载到页面的时刻执行render(){}
  render() {
    console.log('parent render')
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
            // ref:访问DOM节点，只有类组件可以使用ref，函数组件不能使用ref属性
            // 参数ref只在使用React.forwardRef定义组件时存在，函数组件和class组件不接收ref参数，且props中也不存在ref
            ref={(input) => { this.input = input }}
          />
          <button 
            onClick={this.handleBtnClick}
          >
            提交
          </button>
        </div>
        <ul  ref={(ul) => { this.ul = ul }}>      
            {this.getTodoItem()}
        </ul>
        <Test item={this.state.inputValue} />
      </Fragment>
    );
  }

  // 组件被挂载到页面之后，自动被执行
  componentDidMount() {
    console.log('componentDidMount')
  }

  // 组件被更新之前，自动被执行，判断组件是否进行更新，需要返回一个bool值
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  // 组件被更新之前，它会自动执行，但是它在shouldComponentUpdate之后被执行
  // 如果shouldComponentUpdate返回true它才会执行
  // 如果返回false，这个函数就不会被执行了
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  // 组件更新完成之后，它会被执行
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
}

export default TodoList;
