import { Routes, Route, useParams } from "react-router-dom"; 
import posts from "../../json/posts.json";
import PostModelo from '../../components/PostModelo';
import ReactMarkdown from 'react-markdown';
import './Post.css';
import NaoEncontrada from "../NaoEncontrada";
import PagPadrao from "../../components/PagPadrao";

const Post = () => {
    const param = useParams();
    const post = posts.find((post) => post.id === Number(param.id));

    if (!post) return <NaoEncontrada />;

    return (
        <Routes>
            <Route path="*" element={<PagPadrao />}>
                <Route 
                    index 
                    element={ /* Corrigido de 'elemet' para 'element' */
                        <PostModelo FotoCapa={require(`../../assets/posts/${post.id}/capa.png`)} titulo={post.titulo}>
                            <div className="post-markdown-container">
                                <ReactMarkdown>
                                    {post.texto}
                                </ReactMarkdown>
                            </div>
                        </PostModelo>
                    }
                />
            </Route>
        </Routes>
    );
}

export default Post;
