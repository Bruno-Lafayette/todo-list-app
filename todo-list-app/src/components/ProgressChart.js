import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

function ProgressChart({ todos }) {
  const columnCounts = {
    todo: todos.filter(todo => todo.column === 'todo').length,
    'in-progress': todos.filter(todo => todo.column === 'in-progress').length,
    done: todos.filter(todo => todo.column === 'done').length,
  };

  const data = {
    labels: ['A Fazer', 'Iniciada', 'Finalizada'],
    datasets: [
      {
        data: [columnCounts.todo, columnCounts['in-progress'], columnCounts.done],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="progress-chart">
      <h2>Progresso das Tarefas</h2>
      <Pie data={data} width={200} height={200} />
    </div>
  );
}

export default ProgressChart;
