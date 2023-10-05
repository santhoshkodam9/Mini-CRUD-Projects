// Task.js
import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button></h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
