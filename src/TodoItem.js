import React, { Component }  from 'react';

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
        return <li onClick={this.handleClick}>{this.props.item}</li>
    }
   
}
 export default TodoItem;