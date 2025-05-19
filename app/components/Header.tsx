import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        {/* 選択された建物情報に応じて、適宜情報変更する */}
        <img src="/onsen.png" alt="アイコン" className={styles.icon} /> 
        <span>太宰府かさの家（かさのや）</span>
    </header>
  );
}