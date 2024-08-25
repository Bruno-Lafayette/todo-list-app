import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, removeTodo }) {
  const columns = ['todo', 'in-progress', 'done'];

  return (
    <div className="todo-list">
      {columns.map(column => (
        <div key={column} className={`todo-column ${column}`}>
          <h2>{column === 'todo' ? 'A Fazer' : column === 'in-progress' ? 'Iniciada' : 'Finalizada'}</h2>
          {todos.filter(todo => todo.column === column).map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
