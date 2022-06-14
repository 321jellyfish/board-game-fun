import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

  return (
    <>
      <h3>Comments</h3>
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
