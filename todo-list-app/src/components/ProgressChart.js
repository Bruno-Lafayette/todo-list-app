import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

function ProgressChart({ todos }) {
  const completed = todos.filter(todo => todo.completed).length;
  const pending = todos.filter(todo => !todo.completed).length;

  const data = {
    labels: ['Concluídas', 'Pendentes'],
    datasets: [
      {
        data: [completed, pending],
        backgroundColor: ['#4CAF50', '#FFC107'],
        borderColor: ['#4CAF50', '#FFC107'],
        borderWidth: 1,
      },
    ],
  };

  return (
<div className="progress-chart">
  <h2>Progresso das Tarefas</h2>
  <Pie data={data} />
</div>

  );
}

export default ProgressChart;
