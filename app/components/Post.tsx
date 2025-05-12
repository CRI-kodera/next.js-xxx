import styles from './Post.module.css';

export default function Post() {
  return (
    <div className={styles.card}>
      <div className={styles.user}>
        <img src="/icon.png" alt="アイコン" className={styles.icon} />
        <span>@sample_user</span>
      </div>
      <img src="/photo.jpg" alt="投稿画像" className={styles.photo} />
      <p className={styles.text}>Next.jsの練習です。意外とイケるかも！？</p>
    </div>
  );
}