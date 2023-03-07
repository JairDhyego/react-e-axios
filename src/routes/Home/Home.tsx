import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import http from '../../axios/index';

import {SHome} from "./styles"




type getProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
}


const Home = () => {


  const [posts, setPosts] = useState<getProps[] | []>([]);




  const getPosts = async () => {
    try {
      const response = await http.get<getProps[]>("/posts")
      setPosts(response.data)
    } catch (error) {
      console.log("error:", error)
    }

  }





  useEffect(() => {
    getPosts();
  }, [])

  return (
    <SHome>

      <h1>Últimos posts</h1>
      {posts.length === 0 ? (

        <p>Carregando...</p>
      ) : (
        posts?.map((post) => <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
        </div>)
      )}
    </SHome>
  )
}

export default Home