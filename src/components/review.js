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
  }, []);

  return (
    <>
      <h2 className="capitalize">
        <Link to={`/${review.category}`}>{removeHyphen(pathcategory)}</Link>
      </h2>
      <h3>{review.title}</h3>
    </>
  );
};

export default Review;
