// *** 投稿画面 ***
'use client';

import { useRef } from 'react';
import Header from "../components/Header";
import AddPhoto from "../components/AddPhoto";
import InputText from "../components/InputText";


export default function PostPage() {

  const textAreaRef = useRef<HTMLDivElement>(null);

  const handleScrollToText = () => {
    textAreaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header />

      <section>
        <AddPhoto scrollToText={handleScrollToText} />
      </section>

      <section>
        <InputText ref={textAreaRef}/>
      </section>
    </div>
  );
}
