import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

ReactDOM.render(<TodoList />, document.getElementById('root'));
// 单向数据流：父组件只能向子组件传值，子组件不可以改变该值

