import React , { Component }  from 'react';

class Test extends Component {
    // 当父组件的render函数被运行时，它的子组件的render函数都将被重新运行
    render() {
        console.log('Test render')
        return <div>{this.props.item}</div>
    }
}

export default Test;