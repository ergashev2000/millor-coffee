import React, { useContext } from 'react';
import styles from './BasketPayment.module.scss';
import RangeItem from './../../Page_CoffeeCatalog/ProductRange/RangeItem';
import { deliveryOptions } from './../../TextsDB';
import { MillorContext } from './../../Context';


export default function BasketPayment() {
  const { products } = useContext(MillorContext);

  let summer = 0;
  let discount = 0;
  products.forEach(i => summer = Math.round(summer + i.amount * i.summ))                  //считаем общую сумму без скидки
  products.forEach(i => discount = Math.round(discount + i.amount * i.summ * i.discount)) //считаем общую сумму скидки
  let result = summer - discount;                                              //считаем общую сумму с скидкой

  return (
    <section className={styles.basketPayment}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.promocode}>
            <h6 className={styles.titlePromocode}>Промокод</h6>
            <p className={styles.textPromocode}>Введите подарочный промокод в поле ниже и получите скидку на заказ до 20%. Скидка не распространяется на доставку</p>
            <input type="text" className={styles.promo} placeholder='Введите промокод' />
            <button className={styles.promocodeBtn}>Ввести промокод</button>
          </div>
          <div className={styles.total}>
            <div className={styles.wrapperTitleTotal}>
              <h6 className={styles.titleTotal}>Итог: {result} ₽</h6>
              <div className={styles.imgTotal}>
                <div className={styles.masterCard}></div>
                <div className={styles.visa}></div>
              </div>
            </div>
            <p className={styles.textTotal}>Подытог: {summer} ₽</p>
            <p className={styles.discountTotal}>Скидка: {discount} ₽ (10%)</p>
            <div className={styles.delivery}>
              <p>Доставка: </p>
              <form name={styles.delivery}>
                <ul className={styles.deliveryList}>
                  {deliveryOptions.map(item =>
                    <RangeItem
                      key={Math.random() * 10}
                      styles={styles}
                      text={item.text}
                      name='delivery'
                      span={item.span} />)}
                </ul>
              </form>
            </div>
            <button className={styles.totalBtn}>Оплатить заказ</button>
            <p className={styles.notification}>Ваши персональные данные будут использоваться для управления доступом к вашей учетной записи и для других целей, описанных в нашем документе политика конфиденциальности.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


