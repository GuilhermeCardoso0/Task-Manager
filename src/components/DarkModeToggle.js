import React from 'react';

const DarkModeToggle = ({ dark, toggleDark }) => (
  <div className="toggle-box" onClick={toggleDark}>
    {dark ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
  </div>
);

export default DarkModeToggle;