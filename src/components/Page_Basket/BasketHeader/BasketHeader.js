import React from 'react';
import styles from './BasketHeader.module.scss';
import { Link } from 'react-router-dom';



export default function BasketHeader() {
  return (
    <header className={styles.basketHeader}>
      <div className="container">
        <ul className={styles.navigationLinks}>
          <li className={styles.navigationLink}><Link to='/'>Главная</Link></li>
          <li className={styles.navigationLink}>Корзина</li>
        </ul>
      </div>
    </header>
  );
}


