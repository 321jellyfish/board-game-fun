import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviewById, removeHyphen, changeVote } from "../utils/api";

const Review = () => {
  const { pathcategory } = useParams();
  const { reviewid } = useParams();

  const [review, setReview] = useState({});

  useEffect(() => {
    fetchReviewById(reviewid).then((fetchedReview) => {
      setReview(fetchedReview);
    });
  }, [reviewid]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.innerText === "Upvote 👍") {
      changeVote(reviewid, 1);
    }
    if (event.target.innerText === "Downvote 👎") {
      changeVote(reviewid, -1);
    }
  };

  return (
    <>
      <h2 className="capitalize">
        <Link to={`/${review.category}`}>{removeHyphen(pathcategory)}</Link>
      </h2>
      <section className="review-card">
        <h3>{review.title}</h3>
        <img
          className="individual-image"
          src={review.review_img_url}
          alt={review.title}
        />
        <p>
          <span className="bold">Owner: </span>
          {review.owner}
        </p>
        <p>{review.review_body}</p>
        <span className="bold">Current votes: </span> {review.votes}
        <div className="vote-container">
          <button onClick={handleSubmit}>Upvote 👍</button>
          <button onClick={handleSubmit}>Downvote 👎</button>
        </div>
      </section>
    </>
  );
};

export default Review;
