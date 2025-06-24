import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import AddTask from './AddTask';
const TaskList = ({ category }) => {
  const { toggleTask } = useTaskContext();
  return (
    <div>
      {category.tasks.map((task, idx) => (
        <div key={idx} className={`task-item${task.done ? ' done' : ''}`}>
          <input type='checkbox' checked={task.done} onChange={() => toggleTask(category.name, idx)} className='task-checkbox' />
          <p className={`task-text${task.done ? ' done' : ''}`}>{task.text}</p>
        </div>
      ))}
      <AddTask categoryName={category.name} />
    </div>
  );
};
export default TaskList;