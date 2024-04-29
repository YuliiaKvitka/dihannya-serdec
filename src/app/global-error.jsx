'use client';

import React from 'react';

import { useEffect } from 'react';
const GlobalError = ({ error, reset }) => {
  useEffect(() => {
    // Отправляем ошибку в сервис обработки ошибок
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>Что-то пошло не так</h2>
      <button
        onClick={
          // Пытаемся восстановиться путем повторного рендеринга сегмента
          () => reset()
        }
      >
        Попробовать снова
      </button>
    </div>
  );
};

export default GlobalError;
