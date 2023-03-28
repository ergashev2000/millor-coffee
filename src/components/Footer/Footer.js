import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';


export default function Footer() {
 
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to="/">
              <Image src={require('../../images/logo.png')} webp={require('../../images/logo.webp')} alt="logo" />
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link to="/catalog">Каталог товаров</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/blog">Блог</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}



