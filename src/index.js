import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

ReactDOM.render(<TodoList />, document.getElementById('root'));
// 单向数据流：父组件只能向子组件传值，子组件不可以改变该值

// 总结：
// 1.store必须是唯一的
// 2.只有store能够改变自己的内容
// 3.reducer必须是纯函数
// 4.UI组件负责页面的渲染，容器组件负责逻辑的处理