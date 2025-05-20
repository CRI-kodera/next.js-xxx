import styles from './styles/Info.module.css';

export default function Info() {
  return (
    <div className={styles.card}>
      <a href="#">
        <img src="/photo.jpg" alt="投稿画像" className={styles.photo} />
      </a>
    </div>
  );
}