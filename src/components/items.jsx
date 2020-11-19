import React, { Component } from "react";
import Item from "./item";

export default class Items extends Component {
  state = {
    items: [
      { id: 1, name: "item 1", count: 0 },
      { id: 2, name: "item 2", count: 0 },
      { id: 3, name: "item 3", count: 0 },
    ],
  };

  handleIncrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index].count++;
    this.setState({ items });
  };

  handleDecrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    const count = items[index].count - 1;
    items[index].count = count < 0 ? 0 : count;
    this.setState({ items });
  };

  handleDelete = item => {
    const items = this.state.items.filter(_item => _item.id !== item.id);
    this.setState({ items });
  };

  render() {
    return (
      <ul>
        {this.state.items.map(item => (
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
