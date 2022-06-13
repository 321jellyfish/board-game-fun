import { useState } from "react";

const ReviewList = () => {
  const [reviews, setReviews] = useState([
    {
      owner: "tickle122",
      title: "Kerplunk; Don't lose your marbles",
      review_id: 13,
      category: "dexterity",
      review_img_url:
        "https://images.pexels.com/photos/278888/pexels-photo-278888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      created_at: "2021-01-25T11:16:54.963Z",
      votes: 9,
      designer: "Avery Wunzboogerz",
      comment_count: 61,
    },
  ]);
  return (
    <section>
      <h2>All reviews</h2>
      <ul>
        {reviews.map(({ title, category, owner, review_img_url }) => {
          return (
            <ul>
              <li>{title}</li>
              <li>Owner: {owner} </li>
              <li>
                <img src={review_img_url} alt={title} />
              </li>
              <li>Category: {category}</li>
            </ul>
          );
        })}
      </ul>
    </section>
  );
};

export default ReviewList;
