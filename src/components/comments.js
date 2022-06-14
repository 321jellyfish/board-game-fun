import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Comments = () => {
  const { reviewid } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(reviewid).then((fetchedComments) => {
      setComments(fetchedComments);
    });
  }, [reviewid]);

  return (
    <>
      <h3>Comments</h3>

      {comments.map(({ body, author, comment_id }) => {
        return (
          <div className="comment-card">
            <p>{body}</p>
            <p>
              <span className="bold">Comment author: </span>
              {author}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
