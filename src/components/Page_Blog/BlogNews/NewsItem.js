import React from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils';


export default function NewsItem({ img, imgWebp, title, text, author, link, styles }) {

  function handleSubmit(e) {
    e.preventDefault();
  }


  return (
    <div className={styles.item}>
      <div className={styles.itemImg}>
        {isWebpSupported()
          ? <img src={imgWebp} alt="News" />
          : <img src={img} alt="News" />}
      </div>
      <div className={styles.about}>
        <header>
          <h6 className={styles.itemTitle}>{title}</h6>
        </header>
        <main>
          {text.map(item =>
            <p
              key={Math.random() * 10}
              className={styles.itemText}>{item}</p>
          )}

        </main>
        <footer>
          <p className={styles.author}>{author}</p>
          <a onClick={(e) => handleSubmit(e)} href="/">{link}</a>
        </footer>
      </div>
    </div>
  )
}
