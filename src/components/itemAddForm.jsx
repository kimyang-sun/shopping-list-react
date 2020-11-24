import React, { memo } from "react";

const ItemAddForm = memo(props => {
  const inputRef = React.createRef();
  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name ? props.onAdd(name) : alert("상품을 입력해주세요.");
    inputRef.current.value = "";
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="추가할 상품을 입력하세요."
      />
      <button className="add-btn">추가</button>
    </form>
  );
});

export default ItemAddForm;
