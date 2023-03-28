import React from 'react';
import styles from './BlogQuestions.module.scss';
import { itemQuestion } from './../../TextsDB';
import QuestionItem from './QuestionItem';
import Image from 'react-image-webp';

export default function BlogQuestions() {

  return (
    <section id='questions' className={styles.blogQuestions}>
      <div className="container">
        <div className={styles.container}>
          <h5 className={styles.title}>Частые вопросы:</h5>
          <div className={styles.wrapper}>
            <div className={styles.img}>
              <Image src={require('../../../images/Blog/cup_coffee.png')} webp={require('../../../images/Blog/cup_coffee.webp')} />
            </div>
            <div className={styles.questions}>
              <ul className={styles.items}>
                {itemQuestion.map(item =>
                  <QuestionItem key={Math.random() * 10}
                    styles={styles}
                    title={item.title}
                    text={item.text}
                  />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



