import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const CommentList = () => {
  const { theme } = useContext(ThemeContext);
  const [comments, setComments] = useState([]);
  const { reviewid } = useParams();

  useEffect(() => {
    fetchComments(reviewid).then((fetchedComments) => {
      if (fetchedComments.length === 0) {
        setComments(null);
      } else {
        setComments(fetchedComments);
      }
    });
  }, [reviewid]);

  {
    comments ? (
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
    );
  }
};

export default CommentList;
