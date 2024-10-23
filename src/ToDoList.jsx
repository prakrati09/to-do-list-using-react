import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
