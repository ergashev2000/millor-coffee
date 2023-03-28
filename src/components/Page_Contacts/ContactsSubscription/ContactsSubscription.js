import React from 'react';
import Subscription from '../../Subscription/Subscription';
import styles from './ContactsSubscription.module.scss';


export default function ContactsSubscription() {
  return (
    <section className={styles.contactsSubscription}>
      <Subscription />
    </section>
  );
}



