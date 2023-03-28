import React, { useContext} from 'react';
import styles from './HealthyEatingPath.module.scss';
import { Link } from 'react-router-dom';
import { MillorContext } from '../../Context';

export default function HealthyEatingPath() {
  const { openOneProduct } = useContext(MillorContext);
  return (
    <section className={styles.healthyEatingPath}>
      <div className="container">
        <div className={styles.container}>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}><Link to='/'>Главная</Link></li>
            <li className={styles.navigationItem}><Link to='/catalog'>Каталог товаров</Link></li>
            <li className={styles.navigationItem}><Link to='/catalog/healthy_diet'>Здоровое питание</Link></li>
            <li className={styles.navigationItem}>{openOneProduct.title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}



