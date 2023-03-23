import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be blank");
    } else {
      addTodo(title, desc);
    }
    setTitle("");
    setDesc("");
  };
  return (
    <div className="container">
      <h3>Add a Todo</h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a todo description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" type="submit" size="sm">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddTodo;
