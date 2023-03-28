import React from 'react';
import styles from './TeaSubscription.module.scss';
import Subscription from './../../Subscription/Subscription';


export default function TeaSubscription() {
  return (
    <section className={styles.teaSubscription}>
      <Subscription />
    </section>
  );
}



