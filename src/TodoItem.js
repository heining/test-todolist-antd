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
        const { item, test } = this.props;
        // JSX模板 --> createElement --> js对象(虚拟DOM) --> 真实DOM
        return (
            <li onClick={this.handleClick}>
                { test }-{ item }
            </li>
        )
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