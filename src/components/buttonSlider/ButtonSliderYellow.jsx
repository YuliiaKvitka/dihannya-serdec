import styles from './ButtonSlider.module.css';

const ButtonSliderYellow = ({ align = 'center', href }) => {
  const buttonClass =
    align === 'center'
      ? styles.centered
      : align === 'left'
      ? styles.leftAligned
      : '';
  return (
    <a href={href}>
      <div className={`${styles.buttonYellow} ${buttonClass}`}>Допомогти</div>
    </a>
  );
};

export default ButtonSliderYellow;
