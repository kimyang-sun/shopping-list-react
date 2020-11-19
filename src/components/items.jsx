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

  render() {
    return (
      <ul>
        {this.state.items.map(item => (
          <Item key={item.id} item={item}></Item>
        ))}
      </ul>
    );
  }
}
