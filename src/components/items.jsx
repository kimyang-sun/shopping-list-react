import React, { Component } from "react";
import Item from "./item";

export default class Items extends Component {
  render() {
    return (
      <React.Fragment>
        <button className="reset-btn" onClick={this.props.onReset}>
          전체 삭제
        </button>
        <ul className="items">
          {this.props.items.map(item => (
            <Item
              key={item.id}
              item={item}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            ></Item>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
