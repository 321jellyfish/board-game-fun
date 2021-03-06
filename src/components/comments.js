import { fetchComments, postComment, deleteComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/user";
import { ThemeContext } from "../context/theme";

const Comments = () => {
  const { theme } = useContext(ThemeContext);
  const { reviewid } = useParams();
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);
  const [formInput, setFormInput] = useState({
    body: "",
  });
  const [disableForm, setDisableForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [deleteError, setDeleteError] = useState(null);
  const [emptyTextarea, setEmptyTextarea] = useState("");
  const [disableDelete, setDisableDelete] = useState(false);
  const [succesfullyDelete, setSuccessfullyDeleted] = useState(false);

  useEffect(() => {
    fetchComments(reviewid).then((fetchedComments) => {
      if (fetchedComments.length === 0) {
        setComments(null);
      } else {
        setComments(fetchedComments);
      }
    });
  }, [reviewid, comments]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formInput.body.length < 5) {
      setFormSubmitted(false);
    }
    if (formInput.body.length >= 5) {
      setFormSubmitted(true);
      setEmptyTextarea("");
      postComment(user.username, formInput.body, reviewid)
        .then(() => {
          setDisableForm(true);
          setFormInput({
            body: "",
          });
        })
        .catch((error) => {
          setFormSubmitted(false);
          setDisableForm(false);
          setError("Error");
        });
    }
  };

  const handleDeleteClick = (event, comment_id) => {
    event.preventDefault();
    setDisableDelete(true);
    deleteComment(comment_id)
      .then(() => {
        setDisableDelete(false);
        setSuccessfullyDeleted(true);
      })
      .catch((error) => {
        setDisableDelete(false);
        setDeleteError("Error");
      });
  };

  return (
    <>
      <h3>Comments</h3>
      <div className="comment-user">
        <p>
          <span className="bold">Commenting as: </span>
          {user.username}
        </p>
        <img
          className="user-img-small"
          src={user.img_url}
          alt={user.username}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          id="comment-body"
          name="comment-body"
          rows="4"
          cols="30"
          placeholder="Your comment"
          value={formSubmitted ? emptyTextarea : formInput.body}
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

        {formSubmitted && !succesfullyDelete ? (
          <em>Thank you for your comment</em>
        ) : (
          ""
        )}
        {error ? (
          <p className="bold">
            Sorry there was a problem, please try submitting your comment again
          </p>
        ) : (
          ""
        )}
        {formSubmitted ? "" : <p>Minimum 5 characters</p>}
        {formSubmitted ? "" : <p>Maximum 100 characters</p>}

        <button disabled={disableForm}>Submit comment</button>
      </form>
      {succesfullyDelete ? (
        <p>
          <em>Your comment was deleted</em>
        </p>
      ) : (
        ""
      )}
      {comments ? (
        comments.map(({ body, author, comment_id }) => {
          return (
            <div
              className={
                theme === "light" ? "comment-card" : "comment-card-dark"
              }
              key={comment_id}
            >
              <p>{body}</p>
              {user.username === author ? (
                <button
                  disabled={disableDelete}
                  onClick={(event) => handleDeleteClick(event, comment_id)}
                >
                  Delete comment
                </button>
              ) : (
                ""
              )}
              {user.username === author && deleteError ? (
                <p>Sorry there was a problem, please trying deleting again</p>
              ) : (
                ""
              )}
              <p className="commenter">{author}</p>
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
