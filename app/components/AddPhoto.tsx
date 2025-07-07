'use client';

import styles from './styles/AddPhoto.module.css';
import { useState } from 'react';

export default function AddPhoto({ scrollToText }: { scrollToText: () => void }) {

  const [preview, setPreview] = useState<string | null>(null);

  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };
  
  const moveToNext = () => {

  }

  return (
    <div className={styles.wrap}>
      <div className={styles.photoArea}>
        <label className={styles.addArea}>
          <img src="/add_photo.png" alt="アイコン" className={styles.photoIcon} />
          <p className={styles.text}>ファイルを選択</p>
          <input type="file" accept="image/*" onChange={imageChange} className={styles.fileInput}/>
        </label>

        {preview && (
          <div className={styles.previewArea}>
            <img src={preview} alt="プレビュー画像" className={styles.previewPhoto} />
          </div>
        )}
      </div>

      <div className={styles.nextButton} onClick={scrollToText}>
          <img src="/next_button.svg" alt="ボタン" />
      </div>
    </div>
  );
}