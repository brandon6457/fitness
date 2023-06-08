import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER_POSTS } from "../../utils/queries";
import UserPostList from "../../components/UserPostList";
import { Container, Card } from "@nextui-org/react";
import Auth from "../../utils/auth";

const ProfilePage = () => {
  const profile = Auth.getProfile();

  const { email } = profile.data;
  const { loading, data, error } = useQuery(QUERY_SINGLE_USER_POSTS, {
    variables: { email },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  // console.log(data);
  const userInfo = {
    first: data?.postByUser?.firstName,
    last: data?.postByUser?.lastName,
    email: email,
    age: data?.postByUser?.age,
  };

  // console.log("data from profile page: ", userInfo);

  // optional chaining operator with nullish coalescing
  const userPosts = data?.postByUser?.posts ?? [];
  console.log("userPosts: ", userPosts);
  return (
    <Container
      display="flex"
      alignItems="center"
      justify="center"
      css={{ minHeight: "100vh" }}
    >
      <UserPostList posts={userPosts} userInfo={userInfo} />
    </Container>
  );
};

export default ProfilePage;
