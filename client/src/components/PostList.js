import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <h3 className="card-header bg-dark text-light p-2 m-0">
              {post.postAuthor} <br />
              <span style={{ fontSize: "1rem" }}>
                shared this tip on {post.createdAt}
              </span>
            </h3>
            <div className="card-body bg-dark text-light p-2">
              <p>{post.postText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
