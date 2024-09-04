import styled from "styled-components";
import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./UI/Button";
import { TodoContext } from "./context/TodoContext";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    border-color: #a0a0a0;
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  background-color: #007bff;
  color: #fffe;
  &:hover {
    background-color: #0056b3;
  }
`;

const EditTodoForm = () => {
  const { todos, addTodo } = useContext(TodoContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({ name: "", surname: "", age: "" });

  useEffect(() => {
    const currentTodo = todos[parseInt(id)];
    if (currentTodo) {
      setTodo(currentTodo);
    }
  }, [id, todos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    navigate("/");
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="name"
          placeholder="Name"
          value={todo.name || ""}
          onChange={handleChange}
        />
        <StyledInput
          type="text"
          name="surname"
          placeholder="Surname"
          value={todo.surname || ""}
          onChange={handleChange}
        />
        <StyledInput
          type="number"
          name="age"
          placeholder="Age"
          value={todo.age || ""}
          onChange={handleChange}
        />
        <StyledButton type="submit">Save Changes</StyledButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default EditTodoForm;
