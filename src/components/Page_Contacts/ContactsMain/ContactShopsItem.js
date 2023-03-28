import React from 'react';

export default function ContactShopsItem({ styles, city, address }) {
  return (
    <div className={styles.shops}>
      <h6 className={styles.shopsCity}>{city}</h6>
      <ul className={styles.shopsItems}>
        {address.map(item =>
          <li key={Math.random() * 10} className={styles.shopsAddress}>{item}</li>
        )}
      </ul>
    </div>
  )
}
