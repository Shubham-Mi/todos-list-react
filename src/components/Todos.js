import React from "react";
import Title from "./Title";
import TodoItem from "./TodoItem";

function Todos({ todos, onDelete }) {
  return (
    <div className="todos-list container">
      <Title title="Todos List" />
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
