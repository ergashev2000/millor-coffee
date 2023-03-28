import React from 'react';
import styles from './BlogHeader.module.scss';
import { Link } from 'react-router-dom';




export default function BlogHeader() {

  return (
    <section className={styles.blogHeader}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.navigationLinks}>
            <ul>
              <li className={styles.navigationLink}><Link to='/'>Главная</Link></li>
              <li className={styles.navigationLink}>Блог</li>
            </ul>
            <div className={styles.navigationItems}>
              <button className={styles.navigationItem}><a href='#training'>Обучение</a></button>
              <button className={styles.navigationItem}><a href="#news">Новости</a></button>
              <button className={styles.navigationItem}><a href="#questions">Частые вопросы</a></button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}



