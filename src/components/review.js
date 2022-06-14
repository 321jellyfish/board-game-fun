import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviewById, removeHyphen, changeVotes } from "../utils/api";

const Review = () => {
  const { pathcategory } = useParams();
  const { reviewid } = useParams();

  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);

  const [review, setReview] = useState({});

  useEffect(() => {
    fetchReviewById(reviewid).then((fetchedReview) => {
      setReview(fetchedReview);
      setVotes(review.votes);
    });
  }, [reviewid, review.votes]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    if (event.target.innerText === "Upvote 👍") {
      setVotes((currentVotes) => {
        return currentVotes + 1;
      });
    }
    if (event.target.innerText === "Downvote 👎") {
      setVotes((currentVotes) => {
        return currentVotes - 1;
      });
    }

    if (event.target.innerText === "Upvote 👍") {
      changeVotes(reviewid, 1).catch((error) => {
        setError("Error");
        setVotes((currentVotes) => {
          return currentVotes - 1;
        });
      });
    }
    if (event.target.innerText === "Downvote 👎") {
      changeVotes(reviewid, -1).catch((error) => {
        setError("Error");
        setVotes((currentVotes) => {
          return currentVotes + 1;
        });
      });
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
        <span className="bold">Current votes: </span> {votes}
        <div className="vote-container">
          <button onClick={handleSubmit}>Upvote 👍</button>
          <button onClick={handleSubmit}>Downvote 👎</button>
        </div>
        {error ? <p>Vote unsuccessful, please try again</p> : ""}
      </section>
    </>
  );
};

export default Review;
