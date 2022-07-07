import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } =  useFetch('http://localhost:3000/dashboard' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:3000/dashboard'+ blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="dive-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
     );
}
 
export default BlogDetails;