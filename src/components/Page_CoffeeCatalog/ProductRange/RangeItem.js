import React, { useRef } from 'react';


export default function RangeItem({ img, imgWebp, styles, text, name, span }) {
  const data = useRef();

  return (
    <li className={styles.iconItem}>
      <label className={text && styles.aboutWrapper}>
        <input ref={data} className={styles.input} type="radio" name={name}></input>
        <span className={styles.customRadio}></span>
        {img ?
        <img className={styles.iconImg} src={img} alt="The degree of frying" />
        :
        <p>{text} {span && <span>{span}</span>}</p>
        }
      </label>
    </li >
  )
}
