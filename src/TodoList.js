import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import TodoListUi from './TodoListUi'
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';
import { getInputChangeAction, getBtnClickAction, getItemDeleteAction } from './store/actionCreators.js';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        // 订阅store的改变
        store.subscribe(this.handleStoreChange)    
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange() {
       this.setState(store.getState())
    }

    handleBtnClick() {
        const action = getBtnClickAction()
        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = getItemDeleteAction()
        store.dispatch(action)
    }

    render() {
        return <TodoListUi />
    }
}

export default TodoList;