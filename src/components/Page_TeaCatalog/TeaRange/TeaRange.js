import React from 'react';
import styles from './TeaRange.module.scss';
import { teaRange } from '../../ImagesDB.js';
import TeaRangeItem from './TeaRangeItem';
import { Link } from 'react-router-dom';



export default function TeaRange() {
  return (
    <section className={styles.teaRange}>
      <div className="container">
        <div className={styles.container}>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}><Link to='/'>Главная</Link></li>
            <li className={styles.navigationItem}><Link to='/catalog'>Каталог товаров</Link></li>
            <li className={styles.navigationItem}>Чай и кофейные напитки</li>
          </ul>
          <h4 className={styles.title}>Чай и кофейные напитки</h4>
          <div className={styles.img}></div>
          <div className={styles.range}>
            {
              teaRange.map((item) =>
                <TeaRangeItem key={Math.random() * 100} img={item.img} imgWebp={item.imgWebp} text={item.text} styles={styles} item={item} />
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
}



