import React from "react";
import "./Main.css";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import PostList from "../../components/PostList";
import PostForm from "../../components/PostForm";


const Main = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-8 mb-3"
        >
          <PostForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Start Your Fitness Journey Here..." />
          )}
        </div>
      </div>
    </main>
  );
};
        
export default Main;

