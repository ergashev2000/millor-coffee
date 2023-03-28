import React from 'react';
import styles from './BasketDelivery.module.scss';

export default function BasketDelivery() {
  return (
    <section className={styles.basketDelivery}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.wrapperTitle}>
            <h6 className={styles.title}>Доставка</h6>
          </div>
          <div className={styles.wrapperAbout}>
            <div className={styles.client}>
              <h6 className={styles.clientTablet}>Контактная информация</h6>
              <ul className={styles.clientList}>
                <li className={styles.clientItem}><input type="text" placeholder='Имя' /></li>
                <li className={styles.clientItem}><input type="text" placeholder='Фамилия' /></li>
                <li className={styles.clientItem}><input type="tel" placeholder='Телефон' /></li>
                <li className={styles.clientItem}><input type="email" placeholder='Email' /></li>
                <li className={styles.clientItem}><input type="text" placeholder='Название компании (необязательно)' /></li>
              </ul>
            </div>
            <div className={styles.address}>
              <h6 className={styles.adressTablet}>Адрес доставки</h6>
              <ul className={styles.addressList}>
                <li className={styles.addressItem}><input type="text" placeholder='Страна' /></li>
                <li className={styles.addressItem}><input type="text" placeholder='Город' /></li>
                <li className={styles.addressItem}><input type="text" placeholder='Улица, дом' /></li>
                <li className={styles.addressItem}><input type="text" placeholder='Почтовый индекс' /></li>
                <li className={styles.addressItem}><input type="text" placeholder='Комментарий к заказу (необязательно)' /></li>
              </ul>
            </div>
          </div>
          <button className={styles.btn}>Рассчитать доставку</button>
        </div>
      </div>
    </section>
  );
}



