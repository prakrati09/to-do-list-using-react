import React, { useState } from 'react';

const ToDoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false); // Manage edit mode
  const [newText, setNewText] = useState(todo.text); // Local state for the new text

  // Save the edited task
  const saveEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      )}
      <div>
        {isEditing ? (
          <button onClick={saveEdit} className="edit">Save</button>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="edit">Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
};

export default ToDoItem;
