import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
const AddTask = ({ categoryName }) => { const { addTask } = useTaskContext(); const [task, setTask] = useState(''); const handleSubmit = (e) => { e.preventDefault(); if (!task.trim()) return; addTask(categoryName, task); setTask(''); };
  return (
    <form onSubmit={handleSubmit} className='form'>
      <input value={task} onChange={e => setTask(e.target.value)} placeholder='Nova tarefa' className='input' />
      <button type='submit' className='button'>+</button>
    </form>
  );
};
export default AddTask;