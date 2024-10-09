import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'O meu novo website', body: 'lorem ipsum...', author:'Rui', id: 1},
        { title: 'Festa de lançamento!', body: 'lorem ipsum...', author:'Marie', id: 2},
        { title: 'Dicas de programaçao web', body: 'lorem ipsum...', author:'Rui', id: 3}
    ]);

    return (
        <div className="home">
           <BlogList blogs={blogs.filter((blog) => blog.author === "Rui")}  title="As minhas publicaçōes" />
           <BlogList blogs={blogs.filter((blog) => blog.author != "Rui")}  title="Publicaçōes de amigos" />
        </div>
    );
}
 
export default Home;