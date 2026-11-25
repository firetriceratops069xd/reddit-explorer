import PostCard from "../PostCard/PostCard";
import "./Feed.css";

function Feed({ posts }) {
    return (
        <div className="feed">
           {posts.length === 0 
                ? "No posts found. Try another search." 
                : posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    );
}

export default Feed;