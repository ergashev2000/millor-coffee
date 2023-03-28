import React, { useContext } from 'react';
import styles from './BasketProducts.module.scss';
import { MillorContext } from './../../Context';
import BasketProductsItem from './BasketProductsItem';


export default function BasketProducts() {
  const { transformationWord, products, setProducts, totalProducts } = useContext(MillorContext);
  return (
    <section className={styles.basketProducts}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.header}>
            <h6 className={styles.title}>{transformationWord(totalProducts, ['товар', 'товара', 'товаров'])} в корзине</h6>
            {products.length > 1 && <button className={styles.btn} onClick={() => setProducts([])}>Удалить все</button>}
          </div>
          <div className={styles.products}>
            <ul className={styles.productsTitleList}>
              <li className={styles.productsTitle}>Удалить товар</li>
              <li className={styles.productsTitle}>Наименование товара</li>
              <li className={styles.productsTitle}>Цена</li>
              <li className={styles.productsTitle}>Количество</li>
              <li className={styles.productsTitle}>Скидка (10%)</li>
              <li className={styles.productsTitle}>Итого</li>
            </ul>
            {products.map(item =>
              <BasketProductsItem
                key={Math.random() * 10}
                item={item}
                styles={styles}
                img={item.img}
                imgWebp={item.imgWebp}
                title={item.title}
                text={item.text}
                price={item.price}
                pack={item.pack}
                amount={item.amount}
                discount={item.discount}
                summ={item.summ}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}



