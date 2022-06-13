import { useState, useEffect } from "react";
import { fetchReviews } from "../utils/api";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews().then((fetchedReviews) => {
      setReviews(fetchedReviews);
    });
  }, []);

  return (
    <section>
      <h2>All reviews</h2>
      <ul>
        {reviews.map(
          ({ title, category, owner, review_img_url, review_id }) => {
            return (
              <ul key={review_id}>
                <li>{title}</li>
                <li>Owner: {owner} </li>
                <li>
                  <img src={review_img_url} alt={title} />
                </li>
                <li>Category: {category}</li>
              </ul>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default ReviewList;
