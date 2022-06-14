import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviewById, removeHyphen } from "../utils/api";

const Review = () => {
  const { pathcategory } = useParams();
  const { reviewid } = useParams();

  const [review, setReview] = useState({});

  useEffect(() => {
    fetchReviewById(reviewid).then((fetchedReview) => {
      setReview(fetchedReview);
    });
  }, [reviewid]);

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
        <p>{review.review_body}</p>
        <p>
          <span className="bold">Owner: </span>
          {review.owner}
        </p>
      </section>
    </>
  );
};

export default Review;
