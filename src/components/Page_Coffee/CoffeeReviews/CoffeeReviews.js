import React, { useContext, useState } from 'react';
import styles from './CoffeeReviews.module.scss';
import { MillorContext } from './../../Context';
import Review from '../../Review/Review';



export default function CoffeeReviews() {
  const { openOneProduct } = useContext(MillorContext);

  const [showAll, setShowAll] = useState(false);

  const show = () => {
    setShowAll(!showAll);
  }

  return (
    <section className={styles.coffeeReviews}>
      <div className="container">
        <div className={styles.container}>
          <h6 className={styles.title}>Отзывы</h6>
          {!showAll
            ?
            openOneProduct.review.map((i, index) => index < 3 &&
              <Review
                key={Math.random() * 10}
                title={i.title}
                data={i.data}
                avtor={i.avtor}
                city={i.city}
                rating={i.rating}
                ratingWebp={i.ratingWebp}
                text={i.text}
                ava={i.photo}
                avaWebp={i.photoWebp} />)
            :
            openOneProduct.review.map(i =>
              <Review
                key={Math.random() * 10}
                title={i.title}
                data={i.data}
                avtor={i.avtor}
                city={i.city}
                rating={i.rating}
                ratingWebp={i.ratingWebp}
                text={i.text}
                ava={i.photo}
                avaWebp={i.photoWebp} />)
          }

          {openOneProduct.review.length > 3 && <button onClick={() => show()} className={styles.btn}>{!showAll ? 'Показать еще' : 'Скрыть'}</button>}

        </div>
      </div>
    </section>
  );
}



