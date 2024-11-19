import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Francisco Vaz"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis, modi cumque dolorum dolor earum rerum, veritatis labore unde facilis, perspiciatis ad quos iure incidunt nesciunt temporibus fugit. Assumenda, sunt?"
      />

      <Post
        author="José Tomás"
        content="New post"
      />
    </>
  )
}


