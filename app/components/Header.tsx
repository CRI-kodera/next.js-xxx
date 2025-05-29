import styles from './styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        {/* 
          呼び出し先の画面に応じて、表示内容の切り分けできる？？？

          ・一覧画面の場合
            選択された建物のジャンルと企業名を表示する

          ・詳細画面の場合
          　選択された画像に紐づくユーザーアイコンとユーザー名を表示する
        */}
        <img src="/onsen.png" alt="アイコン" className={styles.headerIcon} /> 
        <span>テキストテキストテキスト</span>
    </header>
  );
}