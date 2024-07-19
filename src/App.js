import React, { useState } from 'react';
import './App.css';
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index, newValue) => {
    const newTodos = [...todos];
    newTodos[index] = newValue;
    setTodos(newTodos);
  };

  return (
    <div class="main">
      <div class="centre">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      <button id="add" onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button class="extra" onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => editTodo(index, prompt('Edit Todo', todo))}>
              Edit
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TodoList;
