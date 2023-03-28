import React from 'react';
import styles from './TeaNav.module.scss';


export default function TeaNav() {
  return (
    <section className={styles.teaNav}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.description}><a href="#description">Описание</a></div>
          <div className={styles.prepare}><a href="#prepare">Как готовить?</a></div>
          <div className={styles.additionally}><a href="#additionally">Дополнительно</a></div>
          <div className={styles.reviews}><a href="#reviews">Отзывы</a></div>
        </div>
      </div>
    </section>
  );
}



