import React from 'react'

export default function NewsNavItem({ text, styles }) {
  return (
    <li className={styles.navItem}>
      <p>{text}</p>
    </li>
  )
}
