import React from 'react';
import styles from './CoffeeSubscription.module.scss';
import Subscription from './../../Subscription/Subscription';


export default function CoffeeSubscription() {
  return (
    <section className={styles.coffeeSubscription}>
      <Subscription />
    </section>
  );
}



