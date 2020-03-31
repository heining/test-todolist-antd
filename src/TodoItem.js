import React, { Component }  from 'react';
import { PropTypes } from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // es6的解构赋值
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }

    render() {
        console.log('child render')
        const { item, test } = this.props;
        // JSX模板 --> createElement --> js对象(虚拟DOM) --> 真实DOM
        return (
            <li onClick={this.handleClick}>
                { test }-{ item }
            </li>
        )
    }

    // 一个组件要从父组件接收参数
    // 如果这个组件第一次存在于父组件中，不会被执行
    // 如果这个组件之前已经存在于父组件中，才会被执行
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps')
    }

    // 当这个组件即将被从页面中剔除的时候，会被执行
    componentWillUnmount() {
        console.log('child componentWillUnmount')
    }
   
}
// propTypes:限制传入参数的类型
TodoItem.propTypes = {
    // isRequired:该参数必须传递
    test: PropTypes.string.isRequired,
    item: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

// defaultProps:父组件没有传递test,子组件设置test的默认属性
TodoItem.defaultProps = {
    test: 'hello ning'
}

 export default TodoItem;