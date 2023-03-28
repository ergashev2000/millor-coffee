import React from 'react';


export default function QuestionItem({ styles, title, text }) {

  return (
    <li className={styles.questionsItem}>
      <details>
        <summary className={styles.questionsTitle}>{title}</summary>
        <p className={styles.questionsText}>{text}</p>
      </details>
    </li>
  )
}
