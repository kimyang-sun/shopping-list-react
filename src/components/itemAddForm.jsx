import React, { Component } from "react";

export default class ItemAddForm extends Component {
  inputRef = React.createRef();
  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name ? this.props.onAdd(name) : alert("상품을 입력해주세요.");
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="추가할 상품을 입력하세요."
        />
        <button className="add-btn">추가</button>
      </form>
    );
  }
}
