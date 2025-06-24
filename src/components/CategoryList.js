import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskList from './TaskList';
const CategoryList = () => { const { categories } = useTaskContext(); return (
    <div>
      {categories.map((cat, idx) => (
        <div key={idx} className='category-card'>
          <h3 className='category-title'>{cat.name}</h3>
          <TaskList category={cat} />
        </div>
      ))}
    </div>
  );};
export default CategoryList;