import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviewById } from "../utils/api";

const Review = () => {
  const { pathcategory } = useParams();
  const { reviewid } = useParams();

  const [review, setReview] = useState({});

  useEffect(() => {
    fetchReviewById(reviewid).then((fetchedReview) => {
      console.log(fetchedReview);
      setReview(fetchedReview);
    });
  }, []);

  return (
    <>
      <h1>
        Full Review {pathcategory} {reviewid}
      </h1>
      <p>{review.title}</p>
    </>
  );
};

export default Review;
