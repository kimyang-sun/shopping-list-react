import React, { Component } from "react";
import Item from "./item";

export default class Items extends Component {
  handleIncrement = item => {
    this.props.onIncrement(item);
  };

  handleDecrement = item => {
    this.props.onDecrement(item);
  };

  handleDelete = item => {
    this.props.onDelete(item);
  };

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <Item
            key={item.id}
            item={item}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          ></Item>
        ))}
      </ul>
    );
  }
}
