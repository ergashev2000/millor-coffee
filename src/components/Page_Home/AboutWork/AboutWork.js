import React from 'react';
import styles from './AboutWork.module.scss';
import { Link } from 'react-router-dom';


export default function AboutWork() {
  return (
    <section className={styles.aboutWork}>
      <div className="container">
        <div className={styles.container}>
          <h4 className={styles.title}>Как мы обжариваем наш кофе:</h4>
          <p className={styles.text}>Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство
            в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы
            для производства растворимой продукции.</p>
          <p className={styles.text}> Кофе поставляется в контейнерах напрямую с плантаций по всему миру. Компания имеет долгосрочные контракты по поставке продукции. Каждая партия проходит строгий контроль на заводе для проверки зерна. Зеленое зерно обжаривается, проходит процесс дегазации и тут же отправляется клиентам. Наши обжарщики прошли обучение в России и за рубежом.
            У нас свой подход к каждой партии зерна.</p>
          <p className={styles.text}> Мы раскрываем вкус каждого сорта кофе.</p>
          <button className={styles.btn}><Link className={styles.link} to="/catalog">Перейти в каталог</Link></button>
        </div>
      </div>
    </section>
  );
}



