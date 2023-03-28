import React from 'react';
import styles from './CoffeeCatalogMain.module.scss';
import Subscription from '../../Subscription/Subscription';


export default function CoffeeCatalogMain() {
  return (
    <section className={styles.coffeeCatalogMain}>
      <Subscription />
    </section>
  );
}



