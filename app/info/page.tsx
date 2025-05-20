// *** 情報一覧画面 ***
import Header from "../components/Header";
import Info from "../components/Info";


export default function InfoPage() {

  const posts = Array.from({ length: 6 });

  return (
    <div>
      <Header />

      <main style={{ marginTop: '100px', height: '100vh', overflowY: 'scroll'}}>
        {posts.map((_, i) => (
          <Info key={i} />
        ))}
      </main>
    </div>
  );
}
