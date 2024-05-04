import styles from './Card.module.css';
import Image from 'next/image';
import ButtonSliderBlue from '../../buttonSlider/ButtonSliderBlue';
import ButtonSliderYellow from '../../buttonSlider/ButtonSliderYellow';
import Link from 'next/link';

const Card = props => {
  return (
    <div className={styles.card_row}>
      <article className={styles.card}>
        <div className={styles.card_image}>
          <Image
            className={styles.img}
            src={props.img}
            alt=''
            width={350}
            height={210}
          />
        </div>
        <div className={styles.card_content}>
          <h3 className={styles.card_title}>{props.title}</h3>

          <p className={styles.card_desc}>{props.desc}</p>
        </div>
        <div className={styles.block_btn}>
          <ButtonSliderYellow align='center' href='/#contacts' />
          <Link href={`/projects/${props.id}`} text={props.text}>
            <ButtonSliderBlue />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Card;
{
  /* <Link href='/route/[slug]?slug=1'>link</Link>; */
}
