import React from 'react';
import styles from './BlogNews.module.scss';
import NewsItem from './NewsItem';
import { itemsBlogNews, itemsBlogNewsNav } from './../../TextsDB';
import NewsNavItem from './NewsNavItem';


export default function BlogNews() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section id='news' className={styles.blogNews}>
      <div className="container">
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.title}>
              <h6>Новости:</h6>
            </div>
            <nav className={styles.nav}>
              <ul className={styles.navItems}>
                {itemsBlogNewsNav.map(item =>
                  <NewsNavItem key={Math.random() * 10}
                    styles={styles}
                    text={item} />
                )}
              </ul>
            </nav>
          </header>
          {
            itemsBlogNews.map(item =>
              <NewsItem
                key={Math.random() * 10}
                styles={styles}
                img={item.img}
                imgWebp={item.imgWebp}
                title={item.title}
                text={item.text}
                author={item.author}
                link={item.link}
              />
            )}
          <a onClick={(e) => handleSubmit(e)} href='/'> <button className={styles.btn}>Показать еще</button></a>

        </div>
      </div>
    </section>
  );
}



