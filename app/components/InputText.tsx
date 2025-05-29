'use client';

import styles from './styles/InputText.module.css';
import { forwardRef } from 'react';


const TextArea = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className={styles.textArea} ref={ref}>
      <textarea className={styles.textBox} placeholder="コメントを入力…" />
    </div>
  );
});

export default TextArea;