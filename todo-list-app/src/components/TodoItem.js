import React from 'react';

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
      />
      {todo.text}
      <button onClick={() => removeTodo(index)}>Remover</button>
    </li>
  );
}

export default TodoItem;
