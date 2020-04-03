import React, { Component, Fragment } from "react";
import { Input, Button, List } from "antd";

class TodoListUi extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ marginTop: "20px", marginLeft: "50px" }}>
          <Input
            value={this.state.inputValue}
            placeholder="输入框"
            style={{ width: "300px" }}
            onChange={this.handleInputChange}
          />
          <Button
            type="primary"
            style={{ marginLeft: "10px" }}
            onClick={this.handleBtnClick}
          >
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", marginLeft: "50px", width: "380px" }}
          header={<div>技术栈</div>}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        ></List>
      </Fragment>
    )
  }
}

export default TodoListUi;
