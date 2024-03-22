import { Link } from 'react-router-dom';

function BlogCard() {
    return (
        <Link to="">
            <div style={{ backgroundImage: `url(../../public/images/articlePlaceholder.png)`}}>
                <h2>Title: {}</h2>
                <div>Location: {}</div>
            </div>
        </Link>
    );
};

export default BlogCard;