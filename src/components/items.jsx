import React, { Component } from "react";
import Item from "./item";

export default class Items extends Component {
  render() {
    return (
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
    );
  }
}
