'use client';

import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // другие поля
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // Здесь можно отправить данные на сервер или выполнить другие операции
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      {/* Другие поля формы */}
      <button type='submit'>Отправить</button>
    </form>
  );
};

export default Form;
