import React from "react";
import "./Main.css";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import PostList from "../../components/PostList";
import PostForm from "../../components/PostForm";

const Main = () => {
  const { loading, data, refetch } = useQuery(QUERY_POSTS);
  
  React.useEffect(() => {
    refetch().catch((err) => {
      console.error(err);
    });
  }, []);

  
  const posts = data?.posts || [];

  return (
    <main className="mainContainer">
      <div className="flexRow justifyCenter">
        <div className="col-12 col-md-8 mb-3">
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

