import React from "react";
import { Button } from "react-bootstrap";

function TodoItem({ todo, onDelete }) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <Button variant="danger" size="sm" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
}

export default TodoItem;
