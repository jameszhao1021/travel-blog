import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
    return (
        // link to blog Id
        <Link to={`/blog/${blog.Id}`}>
        {/* <Link to={`/blog/${blog.title}`}> */}
            <div style={{ backgroundImage: `url(${blog.preview})`}}>
                <h2>Title: {blog.title}</h2>
                <div>Country: {blog.country}</div>
            </div>
        </Link>
    );
};

export default BlogCard;