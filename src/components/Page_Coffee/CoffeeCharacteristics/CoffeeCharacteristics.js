import React from 'react';
import styles from './CoffeeCharacteristics.module.scss';


export default function CoffeeCharacteristics() {
  return (
    <section className={styles.coffeeCharacteristics}>
      <div className="container">
        <div id='description' className={styles.container}>
          <div className={styles.taste}>
            <h6 className={styles.tasteTitle}>Вкус</h6>
            <ul className={styles.tasteList}>
              <li className={styles.tasteItem}>
                <div className={styles.tasteImg}></div>
                <p className={styles.tasteText}>Шоколад</p>
              </li>
              <li className={styles.tasteItem}>
                <div className={styles.tasteImg}></div>
                <p className={styles.tasteText}>Яблоко</p>
              </li>
              <li className={styles.tasteItem}>
                <div className={styles.tasteImg}></div>
                <p className={styles.tasteText}>Какао</p>
              </li>
            </ul>
          </div>
          <div className={styles.characteristics}>
            <h6 className={styles.characteristicsTitle}>Характеристики</h6>
            <ul className={styles.characteristicsList}>
              <li className={styles.characteristicsItem}>
                <h6 className={styles.itemTitle}>Арабика: </h6>
                <p className={styles.characteristicsText}>Кот Бразилио, Перу гр.2, Эфиопия Сидамогр.4 Премиум Амхара Айеху</p>
              </li>
              <li className={styles.characteristicsItem}>
                <h6 className={styles.itemTitle}>Робуста:</h6>
                <p className={styles.characteristicsText}>мытая Индия, сухой Вьетнам</p>
              </li>
              <li className={styles.characteristicsItem}>
                <h6 className={styles.itemTitle}>Способ обработки:</h6>
                <p className={styles.characteristicsText}>мытая, сухая</p>
              </li>
              <li className={styles.characteristicsItem}>
                <h6 className={styles.itemTitle}>Вид кофе:</h6>
                <p className={styles.characteristicsText}>cмесь арабика/робуста</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.wrapperAbout}>
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



