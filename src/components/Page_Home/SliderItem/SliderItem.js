import React from 'react';
import styles from './SliderItem.module.scss';
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';


export default function SliderItem() {
  return (
    <div className={styles.item}>
      <div className={styles.about}>
        <h2 className={styles.title}>Свежеобжаренный кофе</h2>
        <p className={styles.text}>Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>
        <p className={styles.text}>Мы обжариваем кофе <span>каждые выходные.</span></p>
        <button className={styles.btn}>
          <Link to="/catalog">Посмотреть каталог</Link>
        </button>
      </div>
      <div className={styles.img}>
        <Image src={require('../../../images/slider/coffee.png')} webp={require('../../../images/slider/coffee.webp')} />
      </div>
    </div>
  );
}



