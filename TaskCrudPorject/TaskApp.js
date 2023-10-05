import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function TaskApp() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    // ... other tasks
  ]);

  const addTask = task => {
    const newTask = { id: tasks.length + 1, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleReminder = id => {
    setTasks(
      tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task))
    );
  };

  return (
    <div className="container">
      <header>
        <h1>Task Manager</h1>
        <TaskForm onAdd={addTask} />
        {tasks.length > 0 ? (
          <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          'No tasks to show'
        )}
      </header>
    </div>
  );
}

export default TaskApp;
