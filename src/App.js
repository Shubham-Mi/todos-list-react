import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const newTodo = {
      sno: sno,
      title: title,
      description: desc,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="App">
      <Header title="Todos List" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
