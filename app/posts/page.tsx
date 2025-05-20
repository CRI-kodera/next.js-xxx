// *** 投稿画面 ***
import Header from "../components/Header";
import AddPhoto from "../components/AddPhoto";
import InputText from "../components/InputText";


export default function PostPage() {
  return (
    <div>
      <Header />

      <section>
        <AddPhoto />
      </section>

      <InputText />
    </div>
  );
}
