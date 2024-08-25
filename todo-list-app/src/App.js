import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ProgressChart from './components/ProgressChart';
import TaskHistoryPopup from './components/TaskHistoryPopup';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    setHistory([...history, `Adicionada tarefa: ${todo.text}`]);
  };

  const updateTodo = (index, updatedTodo) => {
    const newTodos = todos.map((todo, i) => (i === index ? updatedTodo : todo));
    setTodos(newTodos);
    setHistory([...history, `Atualizada tarefa: ${updatedTodo.text}`]);
  };

  const removeTodo = (index) => {
    const removedTodo = todos[index];
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setHistory([...history, `Removida tarefa: ${removedTodo.text}`]);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} />
      <ProgressChart todos={todos} />
      <button className="history-button" onClick={() => setShowHistory(true)}>
        Ver Histórico
      </button>
      {showHistory && <TaskHistoryPopup history={history} onClose={() => setShowHistory(false)} />}
    </div>
  );
}

export default App;
