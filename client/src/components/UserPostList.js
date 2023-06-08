import React from "react";
import { Grid, Card } from "@nextui-org/react";
import { useMutation } from "@apollo/client";
import { UPDATE_POST, REMOVE_POST } from "../utils/mutations";
import Auth from "../utils/auth";
import { Button, Modal, Typography, Box, TextField } from "@mui/material";
import { QUERY_POSTS } from "../utils/queries";
import { QUERY_SINGLE_USER_POSTS } from "../utils/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./UserPostList.css";

const UserPostList = ({ posts, userInfo }) => {
  const [postToEdit, setPostToEdit] = React.useState();
  const [openModal, setOpenModal] = React.useState(false);
  const [deletePost, { data }] = useMutation(REMOVE_POST);
  const [updatePost, { error }] = useMutation(UPDATE_POST, {
    update(cache, { data: { updatePost } }) {
      try {
        const { postByUser } = cache.readQuery({
          query: QUERY_SINGLE_USER_POSTS,
          variables: { email: userInfo.email },
        });
        cache.writeQuery({
          query: QUERY_SINGLE_USER_POSTS,
          variables: { email: userInfo.email },
          data: {
            postByUser: {
              ...postByUser,
              posts: [...postByUser.posts, updatePost],
            },
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const fullName =
    userInfo.first.charAt(0).toUpperCase() +
    userInfo.first.slice(1) +
    " " +
    userInfo.last.charAt(0).toUpperCase() +
    userInfo.last.slice(1);

  const handleDeletePost = async (postId) => {
    try {
      const { data } = await deletePost({
        variables: { postId },
        refetchQueries: [{ query: QUERY_POSTS }],
      });
      console.log("deletePost: ", data);
    } catch (err) {
      console.error(err);
    }
  };

  const openEditModal = async (post) => {
    setPostToEdit(post);
    setOpenModal(true);
  };

  const handleEditPost = async (postId) => {
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
        <Grid.Container gap={2}>
          {posts.map((post) => (
            <Grid key={post._id} xs={12} sm={6} md={4} lg={3} item>
              <Card className="card mb-3">
                <h3 className="card-header bg-dark text-light p-2 m-0">
                  {post.postAuthor} <br />
                  <span style={{ fontSize: "1rem" }}>
                    shared this tip on {post.createdAt}
                  </span>
                </h3>
                <div className="card-body bg-dark text-light p-2">
                  <p>{post.postText}</p>
                </div>
                <Button
                  className="edit-button"
                  variant="contained"
                  color="primary"
                  onClick={() => openEditModal(post)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                  Edit
                </Button>
                <Button
                  className="delete-button"
                  variant="contained"
                  color="primary"
                  onClick={() => handleDeletePost(post._id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                  Delete
                </Button>
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
                        onClick={() => handleEditPost(postToEdit._id)}
                      >
                        Save
                      </Button>
                    </Box>
                  </Modal>
                )}
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </div>
  );
};

export default UserPostList;