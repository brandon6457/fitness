import React from "react";
import "./PostList.css";

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div class="postList">
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div class="userPost" key={post._id}>
            <h3>
              {post.postAuthor} <br />
              <span style={{ fontSize: "1rem" }}>
                shared this tip on {post.createdAt}
              </span>
            </h3>
            <div>
              <p>{post.postText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
