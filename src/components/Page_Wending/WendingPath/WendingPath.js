import React, { useContext } from 'react';
import styles from './WendingPath.module.scss';
import { Link } from 'react-router-dom';
import { MillorContext } from './../../Context';


export default function WendingPath() {
  const { openOneProduct } = useContext(MillorContext);
  return (
    <section className={styles.wendingPath}>
      <div className="container">
        <div className={styles.container}>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}><Link to='/'>Главная</Link></li>
            <li className={styles.navigationItem}><Link to='/catalog'>Каталог товаров</Link></li>
            <li className={styles.navigationItem}><Link to='/catalog/wending_products'>Продукция для вендинга</Link></li>
            <li className={styles.navigationItem}>{openOneProduct.title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}



