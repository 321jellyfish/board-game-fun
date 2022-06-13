import { useState, useEffect } from "react";
import { fetchReviews, removeHyphen } from "../utils/api";
import { useParams } from "react-router-dom";

const ReviewList = () => {
  const { pathcategory } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews().then((fetchedReviews) => {
      setReviews(fetchedReviews);
    });
  }, []);

  return (
    <section>
      <h2>{removeHyphen(pathcategory)} reviews</h2>
      <ul>
        {reviews.map(
          ({ title, category, owner, review_img_url, review_id }) => {
            if (!pathcategory || category === pathcategory) {
              return (
                <ul key={review_id} className="review-card">
                  <li>
                    <h3>{title}</h3>
                  </li>
                  <div className="review-card-body">
                    <li>
                      <img src={review_img_url} alt={title} />
                    </li>
                    <div className="review-card-text">
                      <li>
                        <span className="italic">Owner:</span> {owner}{" "}
                      </li>
                      <li>
                        <span className="italic">Category:</span>{" "}
                        {removeHyphen(category)}
                      </li>
                    </div>
                  </div>
                </ul>
              );
            }
          }
        )}
      </ul>
    </section>
  );
};

export default ReviewList;
