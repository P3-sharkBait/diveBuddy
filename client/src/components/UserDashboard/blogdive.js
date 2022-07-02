import { Link } from 'react-router-dom';

const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-dive-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{dive.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;