import React from "react";
import TodoItem from "./TodoItem";

function Todos({ todos, onDelete }) {
  return (
    <div className="todos-list container">
      <h3 className="todos-list__title text-center">Todos List</h3>
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
