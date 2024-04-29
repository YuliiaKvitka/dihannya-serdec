'use client';
import { useState } from 'react';
import Input from './Input';

const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <p>Введенное значение: {inputValue}</p>
    </div>
  );
};

export default ControlledComponent;
