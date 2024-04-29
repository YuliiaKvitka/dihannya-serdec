'use client';
import styles from './Button.module.css';

const Button = () => {
  const handleClick = () => {
    console.log('Кнопка была нажата');
  };

  return (
    <a>
      <div onClick={handleClick} className={styles.button}>
        Детальніше
      </div>
    </a>
  );
};

export default Button;
