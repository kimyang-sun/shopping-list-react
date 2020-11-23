import React, { PureComponent } from "react";

export default class Item extends PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.item);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.item);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.item);
  };

  render() {
    const { name, count } = this.props.item;
    return (
      <li className="item">
        <div className="item-information">
          <span className="item-name">{name}</span>
          <span className="item-count">
            수량 <span className="count">{count}</span>
          </span>
        </div>
        <div className="item-btns">
          <button className="plus-btn" onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
          </button>
          <button className="minus-btn" onClick={this.handleDecrement}>
            <i className="fas fa-minus-square"></i>
          </button>
          <button className="trash-btn" onClick={this.handleDelete}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    );
  }
}
