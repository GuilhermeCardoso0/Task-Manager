import React from 'react';
const ColorPicker = ({ color, onChange }) => (
  <div style={{ marginBottom: '16px' }}>
    <label style={{ marginRight: '8px', fontSize: '14px' }}>Cor:</label>
    <input type='color' value={color} onChange={e => onChange(e.target.value)} />
  </div>
);
export default ColorPicker;