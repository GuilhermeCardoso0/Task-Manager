import React, { createContext, useContext, useState } from 'react';
const TaskContext = createContext();
export const useTaskContext = () => useContext(TaskContext);
export const TaskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const addCategory = (name) => { if (!name.trim()) return; setCategories([...categories, { name, tasks: [] }]); };
  const addTask = (categoryName, taskText) => { setCategories(categories.map(cat => cat.name === categoryName ? { ...cat, tasks: [...cat.tasks, { text: taskText, done: false }] } : cat)); };
  const toggleTask = (categoryName, taskIndex) => { setCategories(categories.map(cat => cat.name === categoryName ? { ...cat, tasks: cat.tasks.map((task, idx) => idx === taskIndex ? { ...task, done: !task.done } : task) } : cat)); };
  return <TaskContext.Provider value={{ categories, addCategory, addTask, toggleTask }}>{children}</TaskContext.Provider>;
};