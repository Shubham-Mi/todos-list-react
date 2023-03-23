import React from "react";
import TodoItem from "./TodoItem";

function Todos({ todos, onDelete }) {
  const todosStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={todosStyle}>
      <h3 className="text-center">Todos List</h3>
      {todos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.sno}
              onDelete={() => {
                onDelete(todo);
              }}
            />
          );
        })
      )}
    </div>
  );
}

export default Todos;
