import React, { useContext } from 'react'
import { MillorContext } from './../../Context';


export default function RangeIcon({ img, text, styles, item }) {
  const { filter, filterText } = useContext(MillorContext);

  return (
    <li className={filterText === text ? `${styles.item} ${styles.active}` : styles.item}
      onClick={() => filter(item)}>
      <p className={styles.iconsText}>{text}</p>
      <div className={styles.iconsImg}>
        {img}
      </div>
    </li>
  )
}
