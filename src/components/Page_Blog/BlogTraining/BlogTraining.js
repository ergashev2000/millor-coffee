import React from 'react';
import styles from './BlogTraining.module.scss';
import { itemsBlogTraining } from '../../TextsDB.js';
import TrainingItem from './TrainingItem';


export default function BlogTraining() {

  return (
    <section id='training' className={styles.blogTraining}>
      <div className="container">
        <div className={styles.container}>
          <h5 className={styles.title}>Как сварить кофе в турке:</h5>
          {
            itemsBlogTraining.map(item =>
              <TrainingItem
                key={Math.random() * 100}
                img={item.img}
                imgWebp={item.imgWebp}
                title={item.title}
                styles={styles}
                text={item.text}
              />
            )
          }
        </div>
      </div>
    </section>
  );
}



