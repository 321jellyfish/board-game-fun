import { fetchComments, postComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/user";

const Comments = () => {
  const { reviewid } = useParams();
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);
  const [formInput, setFormInput] = useState({
    body: "",
  });
  const [disableForm, setDisableForm] = useState(false);

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
    if (formInput.body.length >= 5) {
      postComment(user, formInput.body, reviewid).then((postedComment) => {
        console.log(postedComment, "posted comment");
        setDisableForm(true);
      });
    }
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
          value={formInput.body}
          maxLength="100"
          onChange={(event) => {
            setFormInput((currentFormInput) => {
              const newInput = { ...currentFormInput };
              newInput.body = event.target.value;
              return newInput;
            });
          }}
          disabled={disableForm}
          required
        />
        <p>Minimum 5 characters</p>
        <p>Maximum 100 characters</p>
        <p>
          <span className="bold">Commenting as: </span>
          {user}
        </p>
        <button disabled={disableForm}>Submit comment</button>
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
