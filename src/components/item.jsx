import React, { Component } from "react";

export default class Item extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    // state 오브젝트 안에 있는 count를 증가한 뒤, state를 업데이트 해야함.
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  render() {
    return (
      <li className="list-item">
        <div className="list-information">
          <span className="list-name">Menu Item</span>
          <span className="list-count">
            수량 <span className="count">{this.state.count}</span>
          </span>
        </div>
        <div className="list-btns">
          <button className="plus-btn" onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
          </button>
          <button className="minus-btn" onClick={this.handleDecrement}>
            <i className="fas fa-minus-square"></i>
          </button>
          <button className="trash-btn">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    );
  }
}
