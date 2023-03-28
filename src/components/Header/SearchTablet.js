import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import { MillorContext } from './../Context';

export default function SearchTablet() {
  const { setOpenSearch } = useContext(MillorContext);
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.7 }}
      className={styles.searchTablet}>
      <div className={styles.wrapperSearchTablet}>
        <input className={styles.activeSearchTablet} type="text" placeholder='Поиск по товарам' />
        <span onClick={() => setOpenSearch(false)}>Отменить</span>
      </div>
    </motion.div>
  )
}
