import "./PostCard.css";

function PostCard({ post }) {
    return (
        <article className="post-card">

            {/* Voting section */}
            <div className="post-votes">
                <button className="vote-button">▲</button>
                <span>{post.upvotes}</span>
                <button className="vote-button">▼</button>
            </div>

            {/* Main post content */}
            <div className="post-content">
                
                <div className="post-meta">
                    <span className="subreddit">{post.subreddit}</span>
                    <span>Posted by u/{post.author}</span>
                    <span>{post.time}</span>
                </div>

                <h3 className="post-title">
                    {post.title}
                </h3>

                <p className="post-description">
                    {post.content}
                </p>

                {/* Post actions */}
                <div className="post-actions">
                    <button>💬{post.comments} Commenst</button>
                    <button>↗Share</button>
                </div>

            </div>

        </article>
    );
}

export default PostCard;