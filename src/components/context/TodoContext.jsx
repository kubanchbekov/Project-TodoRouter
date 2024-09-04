import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const updateTodo = (id, updatedTodo) => {
    console.log(updatedTodo);

    setTodos((prevTodos) =>
      prevTodos.map((todo, index) => (index === id ? updatedTodo : todo))
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
