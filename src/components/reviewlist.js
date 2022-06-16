import { useState, useEffect } from "react";
import { fetchReviews, removeHyphen, formatDate } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link, useSearchParams } from "react-router-dom";
import SortBar from "./sortbar";
import ErrorPage from "./errorpage";

const ReviewList = () => {
  const { pathcategory } = useParams();
  const [reviews, setReviews] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams({
    sort_by: "created_at",
    order_by: "desc",
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    const categorySearchParams = { ...searchParams };
    categorySearchParams.category = pathcategory;
    fetchReviews(categorySearchParams)
      .then((fetchedReviews) => {
        setReviews(fetchedReviews);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [searchParams, pathcategory]);

  if (error) {
    return <ErrorPage />;
  }
  if (!error)
    return (
      <section>
        <h2>
          {!pathcategory && !error ? "All" : removeHyphen(pathcategory)} Reviews
        </h2>
        <SortBar
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <ul>
          {reviews.map(
            ({
              title,
              category,
              owner,
              review_img_url,
              review_id,
              votes,
              created_at,
            }) => {
              return (
                <section className="review-card" key={review_id}>
                  <ul>
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
                        <li className="bold">{votes} votes</li>
                        <li>
                          <span className="bold">Posted:</span>{" "}
                          {formatDate(created_at)}
                        </li>
                      </div>
                    </div>
                  </ul>
                  <Link to={`/${category}/${review_id}`}>Read review</Link>
                </section>
              );
            }
          )}
        </ul>
      </section>
    );
};

export default ReviewList;
