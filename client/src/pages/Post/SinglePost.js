import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_POST } from '../../utils/queries';

const SinglePost = () => {
  const { postId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: postId },
  });

  const post = data ? data.post || {} : {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {post.postAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          Posted This On {post.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {post.postText}
        </blockquote>
      </div>
    </div>
  );
};

export default SinglePost;