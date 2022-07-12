import { Link } from 'react-router-dom';

const BlogList = ({Dive, Dashboard}) => {
    
    return ( 
        <div className="dive-list">
            <h2>{Dashboard}</h2>
            {Dive.map(blog => (
                <div className="blog-dive-preview" key={blog.id}>
                    <Link to={`/dashboard/${blog.id}`}>
                        <h2>{Dive.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;