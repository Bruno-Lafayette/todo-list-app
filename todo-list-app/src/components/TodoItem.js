import React from 'react';

function TodoItem({ todo, index, updateTodo, removeTodo }) {
  const moveToColumn = (newColumn) => {
    updateTodo(index, { ...todo, column: newColumn });
  };

  return (
    <li className={`todo-item ${todo.column}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => updateTodo(index, { ...todo, completed: !todo.completed })}
      />
      {todo.text}
      <div className="buttons">
        {todo.column !== 'done' && <button onClick={() => moveToColumn('in-progress')}>Iniciar</button>}
        {todo.column !== 'todo' && <button onClick={() => moveToColumn('todo')}>Voltar</button>}
        {todo.column !== 'done' && <button onClick={() => moveToColumn('done')}>Finalizar</button>}
        <button onClick={() => removeTodo(index)}>Remover</button>
      </div>
    </li>
  );
}

export default TodoItem;
