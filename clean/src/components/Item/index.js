import React, { Component } from "react";

const Item = (props) => {
  return (
    <>
      <li className="todoItem">
        <h3 className="name">{props.todo.name}</h3>
        <h3 className="close" onClick={() => props.handleDelete(props.todo.id)}>
          X
        </h3>
        <button onClick={() => props.handleUpdate(props.todo.id)}> Update</button>
        {/* <p>{this.props.money}</p> */}
      </li>
    </>
  );
};

export default Item;
