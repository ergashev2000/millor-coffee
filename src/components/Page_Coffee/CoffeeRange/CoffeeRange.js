import React from 'react';
import styles from './CoffeeRange.module.scss';
import { productRangeIcons } from '../../ImagesDB';
import RangeIcon from './../../Page_CoffeeCatalog/ProductRange/RangeIcon';


export default function CoffeeRange() {
  return (
    <section  className={styles.coffeeRange}>
      <div className="container">
        <div id='prepare' className={styles.container}>
          <h6 className={styles.title}>Как готовить?</h6>
          <ul className={styles.items}>
            {productRangeIcons.map(item =>
              <RangeIcon key={Math.random() * 100} img={item.img} text={item.text} styles={styles} item={item} />
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}