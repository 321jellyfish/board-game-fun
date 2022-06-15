import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import CommentList from "../components/comment-list";

const Comments = () => {
  const { reviewid } = useParams();
  const [comments, setComments] = useState([]);

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

  return (
    <>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          id="comment-body"
          name="comment-body"
          rows="4"
          cols="30"
          placeholder="Your comment"
        />
        <button>Submit comment</button>
      </form>

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
