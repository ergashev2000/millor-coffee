import React from 'react';
import styles from './WendingRange.module.scss';
import { wendingRange } from '../../ImagesDB.js';
import TeaRangeItem from './../../Page_TeaCatalog/TeaRange/TeaRangeItem';
import { Link } from 'react-router-dom';


export default function WendingRange() {
  return (
    <section className={styles.wendingRange}>
      <div className="container">
        <div className={styles.container}>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}><Link to='/'>Главная</Link></li>
            <li className={styles.navigationItem}><Link to='/catalog'>Каталог товаров</Link></li>
            <li className={styles.navigationItem}>Продукция для вендинга</li>
          </ul>

          <h4 className={styles.title}>Продукция для вендинга</h4>
          <div className={styles.img}></div>
          <div className={styles.range}>
            {
              wendingRange.map((item) =>
                <TeaRangeItem key={Math.random() * 100} img={item.img} imgWebp={item.imgWebp} text={item.text} styles={styles} item={ item} />
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
}



