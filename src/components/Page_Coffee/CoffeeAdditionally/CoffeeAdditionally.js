import React from 'react';
import styles from './CoffeeAdditionally.module.scss';
import { itemsBlogTraining } from '../../TextsDB.js';
import TrainingItem from '../../Page_Blog/BlogTraining/TrainingItem';


export default function CoffeeAdditionally() {
  return (
    <section className={styles.coffeeAdditionally}>
      <div className="container">
        <div className={styles.container}>
          <h5 id='additionally' className={styles.title}>Дополнительно</h5>
          {itemsBlogTraining.map(item =>
            <TrainingItem
              key={Math.random() * 100}
              img={item.img}
              imgWebp={item.imgWebp}
              title={item.title}
              styles={styles}
              text={item.text}
            />)}
        </div>
      </div>
    </section>
  );
}



