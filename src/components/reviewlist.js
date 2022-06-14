import { useState, useEffect } from "react";
import { fetchReviews, removeHyphen } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <h2>{!pathcategory ? "All" : removeHyphen(pathcategory)} Reviews</h2>
      <ul>
        {reviews.map(
          ({ title, category, owner, review_img_url, review_id }) => {
            if (!pathcategory || category === pathcategory) {
              return (
                <section className="review-card">
                  <ul key={review_id}>
                    <li>
                      <h3>{title}</h3>
                    </li>
                    <div className="review-card-body">
                      <li>
                        <img src={review_img_url} alt={title} />
                      </li>
                      <div className="review-card-text">
                        <li>
                          <span className="bold">Owner: </span>
                          {owner}
                        </li>
                        <li>
                          <span className="bold">Category: </span>
                          <span className="capitalize">
                            {removeHyphen(category)}
                          </span>
                        </li>
                      </div>
                    </div>
                  </ul>
                  <Link to={`/${category}/${review_id}`}>Read review</Link>
                </section>
              );
            }
          }
        )}
      </ul>
    </section>
  );
};

export default ReviewList;
