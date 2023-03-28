import React from 'react';
import styles from './HealthyEatingDescription.module.scss';


export default function HealthyEatingDescription() {
  return (
    <section id='description' className={styles.healthyEatingDescription}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.aboutText}>
            <ul className={styles.textList}>
              <li className={styles.textItem}>
                <p className={styles.itemText}>Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития.</p>
              </li>
              <li className={styles.textItem}>
                <p className={styles.itemText}>Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития.</p>
              </li>
              <li className={styles.textItem}>
                <p className={styles.itemText}>Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. С другой стороны реализация намеченных плановых заданий требуют от нас анализа существенных финансовых и административных условий.</p>
              </li>
            </ul>
          </div>
          <div className={styles.aboutImage}></div>
        </div>
      </div>
    </section>
  );
}



