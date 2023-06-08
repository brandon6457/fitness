import React from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_POST, REMOVE_POST } from "../utils/mutations";
import { Card } from "@nextui-org/react";
import "./PostForm.css";
import Auth from "../utils/auth";
import { Button, Modal, Typography, Box, TextField } from "@mui/material";
import { QUERY_POSTS } from "../utils/queries";
import { QUERY_SINGLE_USER_POSTS } from "../utils/queries";

const UserPostList = ({ posts, userInfo }) => {
  const [postToEdit, setPostToEdit] = React.useState();
  const [openModal, setOpenModal] = React.useState(false);
  const [deletePost, { data }] = useMutation(REMOVE_POST);
  const [updatePost, { error }] = useMutation(UPDATE_POST, {
    update(cache, { data: { updatePost } }) {
      try {
        const {postByUser:{posts}} = cache.readQuery({ query: QUERY_SINGLE_USER_POSTS, variables: { email: userInfo.email } });
        console.log(posts);
        cache.writeQuery({
          query: QUERY_SINGLE_USER_POSTS, variables: { email: userInfo.email },
          data: { postByUser:{
            posts: [...posts, updatePost]
          }  
        },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  console.log("profile: ", userInfo);
  const fullName =
    userInfo.first.charAt(0).toUpperCase() +
    userInfo.first.slice(1) +
    " " +
    userInfo.last.charAt(0).toUpperCase() +
    userInfo.last.slice(1);

  const HandleDeletePost = async (postId) => {
    console.log("postId: ", postId);
    try {
      const { data } = await deletePost({
        variables: { postId },
      });
      console.log("deletePost: ", data);
    } catch (err) {
      console.error(err);
    }
  };

  const openEditModal = async (post) => {
    console.log("post: ", post);
    setPostToEdit(post);
    setOpenModal(true);
  };

  const HandleEditPost = async (postId) => {
    console.log("postId: ", postId);
    setOpenModal(false);
    try {
      console.log("postToEdit: ", postToEdit);
      const { data } = await updatePost({
        variables: { postId, postText: postToEdit.postText },
      });
      console.log("updatePost: ", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>{fullName}'s Posts</h3>
      {posts.length === 0 ? (
        <p>{fullName} has not posted anything yet.</p>
      ) : (
        <>
          {posts.map((post) => (
            <Card key={post._id} className="card mb-3">
              <h3 className="card-header bg-dark text-light p-2 m-0">
                {post.postAuthor} <br />
                <span style={{ fontSize: "1rem" }}>
                  shared this tip on {post.createdAt}
                </span>
              </h3>
              <div className="card-body bg-dark text-light p-2">
                <p>{post.postText}</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => openEditModal(post)}
              >
                Edit
              </button>{" "}
              <button
                className="btn btn-primary"
                onClick={() => HandleDeletePost(post._id)}
              >
                Delete
              </button>
              {openModal && postToEdit && (
                <Modal
                  open={openModal}
                  onClose={() => setOpenModal(false)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 400,
                      bgcolor: "background.paper",
                      border: "2px solid #000",
                      boxShadow: 24,
                      p: 4,
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      style={{ marginBottom: "1rem" }}
                    >
                      Edit Post
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="Edit Post"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      defaultValue={postToEdit.postText}
                      onChange={(e) =>
                        setPostToEdit({
                          ...postToEdit,
                          postText: e.target.value,
                        })
                      }
                    />
                    <Button
                      style={{ marginTop: "1rem" }}
                      variant="contained"
                      color="primary"
                      onClick={() => HandleEditPost(postToEdit._id)}
                    >
                      Save
                    </Button>
                  </Box>
                </Modal>
              )}
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default UserPostList;
