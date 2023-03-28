import React from 'react';
import styles from './SocialNetworks.module.scss';
import { socialNetwork } from '../../ImagesDB.js';
import SocialNetworkItem from './../SocialNetworkItem/SocialNetworkItem';
import SocialNetworksSlider from './SocialNetworksSlider';



export default function SocialNetworks() {

  return (
    <section className={styles.socialNetworks}>
      <div className="container">
        <div className={styles.container}>
          <header className={styles.header}>
            <h5 className={styles.title}>Мы в Instagram</h5>
            <div className={styles.headerImg}>
              <img src={socialNetwork[0]} alt="icon Instagram" />
            </div>
          </header>
          <div className={styles.wrapper}>
            <div className={styles.img}>
            </div>
            <div className={styles.slider}>
              <SocialNetworkItem />
              <SocialNetworkItem />
              <SocialNetworkItem />
              <SocialNetworkItem />
              <SocialNetworkItem />
              <SocialNetworkItem />
            </div>
            <SocialNetworksSlider />
          </div>
        </div>
      </div>
    </section>
  );
}



