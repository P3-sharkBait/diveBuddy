import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { LOGIN_USER } from "../../../utils/mutations";

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};

        const handleFormSubmit = async (event) => {
            event.preventDefault();
            console.log(formState);
            try {
              const { data } = await login({
                variables: { ...formState },
              });
        
              Auth.login(data.login.token);
            } catch (e) {
              console.error(e);
            }

        setIsPending(true);

        // fetch('http://localhost:3000/dashboard', {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(blog)
        // }).then(() => {
        //     setIsPending(false);
        //     history.push('/');
        // })
    }

    return ( 
        <div className="create">
            <h2>Add New Dive</h2>
            <form onSubmit={handleSubmit}>
                <label>Add Blog</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Diver:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
            >
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>
        </div>
     );
}

export default NewPost;