import styled from "styled-components";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./UI/Button";
import { TodoContext } from "./context/TodoContext";

const TableWrapper = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const StyledTh = styled.th`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #0056b3;
`;

const StyledTd = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  color: #555;
`;

const StyledTr = styled.tr`
  background-color: #fff;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const StyledButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/add");
  };

  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <TableWrapper>
      <Title>Todo List</Title>
      <StyledButton onClick={handleAddClick}>Add</StyledButton>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Name</StyledTh>
            <StyledTh>Surname</StyledTh>
            <StyledTh>Age</StyledTh>
            <StyledTh>Actions</StyledTh>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <StyledTr key={index}>
              <StyledTd>{todo.name}</StyledTd>
              <StyledTd>{todo.surname}</StyledTd>
              <StyledTd>{todo.age}</StyledTd>
              <StyledTd>
                <StyledButton onClick={() => handleEditClick(index)}>
                  Edit
                </StyledButton>
              </StyledTd>
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default TodoList;
