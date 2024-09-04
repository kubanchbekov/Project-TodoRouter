import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import EditTodoForm from "../components/EditTodoForm"; 

const Approutes = () => {
  const route = createBrowserRouter([
    { path: "/", element: <TodoList /> },
    { path: "/add", element: <TodoForm /> },
    { path: "/edit/:id", element: <EditTodoForm /> }, 
  ]);
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default Approutes;
