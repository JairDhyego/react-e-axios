import http from "../../axios"
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

import { SNewPost } from "./styles";

const NewPost = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState<string | null>(null);
  const [body, setBody] = useState<string | null>( null);

  const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const post = { title, body, userId: 1 }

    if (post) {
      try {
        await http.post("/posts", {
          body: post
        });
        navigate("/")
      } catch (error) {
        console.log("deu o seguinte error:", error)
      }

    }

  };

  return (
    <SNewPost>
      <h2>Inserir novo post</h2>

      <form onSubmit={e => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o titulo"
            onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-control">
          <label htmlFor="body">Conteudo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="digite o conteúdo"
            onChange={e => setBody(e.target.value)} />
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>

    </SNewPost>
  )
}

export default NewPost