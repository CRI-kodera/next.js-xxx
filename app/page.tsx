// *** ここがトップページ ***
import Image from "next/image";
import Header from "./components/Header";
import Post from "./components/Post";

export default function Home() {
  return (
    <div style={{ 
      maxWidth: '400px', 
      height: '100vh',
      margin: '0 auto',
      overflowY: 'scroll',
      background: '#f8f8f8'      
      }}>

      <Header />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
