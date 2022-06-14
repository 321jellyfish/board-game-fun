import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Comments = () => {
  const { reviewid } = useParams();
  const [comments, setComments] = useState([]);
  const [addCommentStatus, setAddCommentStatus] = useState(false);

  useEffect(() => {
    fetchComments(reviewid).then((fetchedComments) => {
      if (fetchedComments.length === 0) {
        setComments(null);
      } else {
        setComments(fetchedComments);
      }
    });
  }, [reviewid]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit form");
  };

  const selectAddComment = (event) => {
    event.preventDefault();
    console.log("select add comment");
    setAddCommentStatus(true);
  };

  const returnToComments = (event) => {
    event.preventDefault();
    setAddCommentStatus(false);
  };

  if (addCommentStatus) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment-body">Your comment:</label>
          <textarea
            id="comment-body"
            name="comment-body"
            placeholder="Your comment"
            rows="4"
            cols="30"
          />
          <button>Submit comment</button>
        </form>
        <button onClick={returnToComments}>Return to comments</button>
      </>
    );
  }
  return (
    <>
      <h3>Comments</h3>
      <button onClick={selectAddComment}>Add comment</button>
      {/* <form onSubmit={handleSubmit}>
        <label for="comment-body">Comment:</label>
        <input
          type="textarea"
          id="comment-body"
          name="comment-body"
          placeholder="Your comment"
        />
        <button>Submit comment</button>
      </form> */}
      {comments ? (
        comments.map(({ body, author, comment_id }) => {
          return (
            <div className="comment-card">
              <p>{body}</p>
              <p className="commenter">
                <span className="bold">Commenter: </span>
                {author}
              </p>
            </div>
          );
        })
      ) : (
        <p className="no-comments">No comments yet...</p>
      )}
    </>
  );
};

export default Comments;
