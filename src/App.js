import React, { useState, useEffect } from 'react';
import { TaskProvider } from './context/TaskContext';
import AddCategory from './components/AddCategory';
import CategoryList from './components/CategoryList';
import ColorPicker from './components/ColorPicker';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  const [primary, setPrimary] = useState('#388e3c');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primary);
    const darker = shadeColor(primary, -15);
    document.documentElement.style.setProperty('--primary-hover', darker);
  }, [primary]);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  const shadeColor = (col, amt) => {
    let usePound = false;
    let color = col;
    if (color[0] === '#') { color = color.slice(1); usePound = true; }
    const num = parseInt(color,16);
    let r = (num >> 16) + amt;
    let b = ((num >> 8) & 0x00FF) + amt;
    let g = (num & 0x0000FF) + amt;
    r = Math.max(Math.min(255, r), 0);
    b = Math.max(Math.min(255, b), 0);
    g = Math.max(Math.min(255, g), 0);
    const rr = (r<<16)|(b<<8)|g;
    return (usePound?'#':'') + rr.toString(16).padStart(6, '0');
  };

  return (
    <div className='app-wrapper'>
      <TaskProvider>
        <div className='app-container'>
          <DarkModeToggle dark={dark} toggleDark={() => setDark(!dark)} />
          <h1 className='app-title'>Gerenciador de Tarefas por Categoria</h1>
          <ColorPicker color={primary} onChange={setPrimary} />
          <AddCategory />
          <CategoryList />
        </div>
      </TaskProvider>
    </div>
  );
};

export default App;
