import React from 'react';
import './TaskHistoryPopup.css';

function TaskHistoryPopup({ history, onClose }) {
  return (
    <div className="task-history-popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Histórico de Tarefas</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskHistoryPopup;