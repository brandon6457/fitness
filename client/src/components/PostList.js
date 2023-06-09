import React from "react";
import "./PostList.css";

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div className="postList">
      <h3>{title}</h3>
      <div className="postContainer">
        {posts &&
          posts.map((post) => (
            <div className="userPost" key={post._id}>
              <div className="postHeader">
                <h3 className="postAuthor">{post.postAuthor}</h3>
                <span className="postDate">{post.createdAt}</span>
              </div>
              <div className="postContent">
                <p>{post.postText}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;
