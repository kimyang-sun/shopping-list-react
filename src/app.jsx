import React, { Component } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import ItemAddForm from "./components/itemAddForm";
import Items from "./components/items";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "로션", count: 1 },
      { id: 2, name: "핸드크림", count: 1 },
      { id: 3, name: "선크림", count: 1 },
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
    if (window.confirm("해당 상품을 삭제하시겠습니까?")) {
      const items = this.state.items.filter(_item => _item.id !== item.id);
      this.setState({ items });
    }
  };

  handleAdd = name => {
    const items = [
      ...this.state.items,
      { id: Date.now(), name: name, count: 1 },
    ];
    this.setState({ items });
  };

  handleReset = () => {
    if (window.confirm("상품들을 전부 삭제하시겠습니까?")) {
      let items = this.state.items;
      items = [];
      this.setState({ items });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.items.filter(item => item.count > 0).length}
        ></Navbar>
        <ItemAddForm onAdd={this.handleAdd}></ItemAddForm>
        <Items
          items={this.state.items}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        ></Items>
      </React.Fragment>
    );
  }
}

export default App;
