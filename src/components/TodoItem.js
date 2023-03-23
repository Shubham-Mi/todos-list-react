import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TodoItem({ todo, onDelete }) {
  return (
    <Card className="todo-item">
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>{todo.description}</Card.Text>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
