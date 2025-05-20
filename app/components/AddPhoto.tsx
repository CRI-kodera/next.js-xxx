'use client';
import styles from './styles/AddPhoto.module.css';
import { useState } from 'react';


export default function AddPhoto() {

  const [preview, setPreview] = useState<string | null>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.photoArea}>
        <label className={styles.addArea}>
          <img src="/add_photo.png" alt="アイコン" className={styles.icon} />
          <p className={styles.text}>ファイルを選択</p>
          <input type="file" accept="image/*" onChange={handleImageChange} className={styles.fileInput}/>
        </label>

        {preview && (
          <div className={styles.previewArea}>
            <img src={preview} alt="プレビュー画像" className={styles.previewPhoto} />
          </div>
        )}
      </div>
    </div>
  );
}