import styles from './ButtonSlider.module.css';

const ButtonSliderYellow = ({ href }) => {
  return (
    <a href={href}>
      <div className={styles.buttonYellow}>Допомогти</div>
    </a>
  );
};

export default ButtonSliderYellow;
