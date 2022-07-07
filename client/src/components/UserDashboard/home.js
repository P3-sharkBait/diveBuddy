import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:3000/dashboard');

    return ( 
        <div className="Dashboard">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title="All Dives"/>
        </div>
     );
}

export default Home;