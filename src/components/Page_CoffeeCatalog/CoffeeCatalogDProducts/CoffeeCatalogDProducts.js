import React, { useContext } from 'react';
import styles from '../../Page_Home/DiscountItem/DiscountItem.module.scss';
import Production from './../../Production/Production';
import { MillorContext } from './../../Context';


export default function CoffeeCatalogDProducts() {
  const { discountItemCoffee } = useContext(MillorContext);
  return (
    <section className={styles.coffeeCatalogDProducts}>
      <Production arr={discountItemCoffee} key={Math.random() * 100} link='coffee' />
    </section>
  );
}



