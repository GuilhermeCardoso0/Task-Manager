import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
const AddCategory = () => {
  const { addCategory } = useTaskContext(); const [input, setInput] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); addCategory(input); setInput(''); };
  return (
    <form onSubmit={handleSubmit} className='form'>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder='Nova categoria' className='input' />
      <button type='submit' className='button'>Adicionar</button>
    </form>
  );
};
export default AddCategory;