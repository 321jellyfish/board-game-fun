import { useParams } from "react-router-dom";

const Review = () => {
  const { pathcategory } = useParams();
  const { reviewid } = useParams();
  return (
    <h1>
      Full Review {pathcategory} {reviewid}
    </h1>
  );
};

export default Review;
