import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');
  const [column, setColumn] = useState('todo');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({ text: input, column });
      setInput('');
      setColumn('todo');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <select value={column} onChange={(e) => setColumn(e.target.value)}>
        <option value="todo">A Fazer</option>
        <option value="in-progress">Iniciada</option>
        <option value="done">Finalizada</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;
