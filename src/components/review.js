import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviewById, removeHyphen, changeVotes } from "../utils/api";
import Comments from "../components/comments";
import ErrorPage from "./errorpage";

const Review = () => {
  const { pathcategory } = useParams();
  const { reviewid } = useParams();

  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);
  const [reviewError, setReviewError] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const [review, setReview] = useState({});

  useEffect(() => {
    fetchReviewById(reviewid)
      .then((fetchedReview) => {
        setReview(fetchedReview);
        setVotes(review.votes);
        setReviewError(false);
      })
      .catch((error) => {
        setReviewError(true);
      });
  }, [reviewid, review.votes]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    setDisableButton(true);

    if (event.target.innerText === "Upvote 👍") {
      setVotes((currentVotes) => {
        return currentVotes + 1;
      });
      changeVotes(reviewid, 1).catch((error) => {
        setDisableButton(false);
        setError("Error");
        setVotes((currentVotes) => {
          return currentVotes - 1;
        });
      });
    }
    if (event.target.innerText === "Downvote 👎") {
      setVotes((currentVotes) => {
        return currentVotes - 1;
      });
      changeVotes(reviewid, -1).catch((error) => {
        setDisableButton(false);
        setError("Error");
        setVotes((currentVotes) => {
          return currentVotes + 1;
        });
      });
    }
  };

  if (reviewError) {
    return <ErrorPage />;
  }
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
        <span className="bold">{votes} Votes</span>

        <div className="vote-container">
          <button onClick={handleSubmit} disabled={disableButton}>
            Upvote 👍
          </button>
          <button onClick={handleSubmit} disabled={disableButton}>
            Downvote 👎
          </button>
        </div>
        {error ? <p>Vote unsuccessful, please try again</p> : ""}
      </section>
      <section className="review-card">
        <Comments />
      </section>
    </>
  );
};

export default Review;
