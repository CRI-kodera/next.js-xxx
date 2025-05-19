import styles from '../styles/Post.module.css';

export default function Post() {
  return (
    <section className={styles.imageArea}>
      <img src="/photo.jpg" alt="投稿画像" className={styles.photo} />
    </section>
  );
}