import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
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
  <button type="submit">Adicionar</button>
</form>

  );
}

export default TodoForm;
