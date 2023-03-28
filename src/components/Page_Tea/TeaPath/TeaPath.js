import React, { useContext } from 'react';
import styles from './TeaPath.module.scss';
import { Link } from 'react-router-dom';
import { MillorContext } from '../../Context';

export default function TeaPath() {
  const { openOneProduct } = useContext(MillorContext);
  return (
    <section className={styles.teaPath}>
      <div className="container">
        <div className={styles.container}>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}><Link to='/'>Главная</Link></li>
            <li className={styles.navigationItem}><Link to='/catalog'>Каталог товаров</Link></li>
            <li className={styles.navigationItem}><Link to='/catalog/tea_catalog'>Чай и кофейные напитки</Link></li>
            <li className={styles.navigationItem}>{openOneProduct.title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}



