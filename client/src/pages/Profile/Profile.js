import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER_POSTS } from "../../utils/queries";
import { Container } from "@nextui-org/react";
import Auth from "../../utils/auth";
import UserPostList from "../../components/UserPostList";
import "./Profile.css";

const ProfilePage = () => {
  const profile = Auth.getProfile();
  const { email } = profile.data;

  const { loading, data, error, refetch } = useQuery(QUERY_SINGLE_USER_POSTS, {
    variables: { email },
  });

  React.useEffect(() => {
    refetch().catch((err) => {
      console.error(err);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const userInfo = {
    first: data?.postByUser?.firstName,
    last: data?.postByUser?.lastName,
    email: email,
    age: data?.postByUser?.age,
  };

  const userPosts = data?.postByUser?.posts ?? [];


  return (
    <Container
      display="flex"
      alignItems="center"
      justify="center"
      css={{ minHeight: "100vh" }}
      className="profile-container"
    >
      <UserPostList posts={userPosts} userInfo={userInfo} />
    </Container>
  );
};

export default ProfilePage;