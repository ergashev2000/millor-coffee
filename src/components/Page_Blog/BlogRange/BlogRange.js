import React from 'react';
import styles from './BlogRange.module.scss';
import { productRangeIcons } from '../../ImagesDB';
import RangeIcon from './../../Page_CoffeeCatalog/ProductRange/RangeIcon';
import { NavLink } from 'react-router-dom';


export default function BlogRange() {

  return (
    <section className={styles.blogRange}>
      <div className="container">
        <div className={styles.container}>
          <h4 className={styles.title}>Приготовление кофе разными способами</h4>
          <ul className={styles.items}>

            {productRangeIcons.map(item =>
              <NavLink key={Math.random() * 100} to={`/blog/${item.id}`}>
                <RangeIcon img={item.img} text={item.text} styles={styles} />
              </NavLink>
            )}

          </ul>

        </div>
      </div>
    </section>
  );
}



