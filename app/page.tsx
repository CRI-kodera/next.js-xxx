// *** ここがトップページ ***
import Image from "next/image";
import Post from "./components/Post";

export default function Home() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '15px' }}>
      <Post />
    </div>
  );
}
