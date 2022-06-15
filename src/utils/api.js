import axios from "axios";

const boardGameFunApi = axios.create({
  baseURL: "https://board-game-fun.herokuapp.com/api/",
});

export const fetchReviews = () => {
  return boardGameFunApi.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};

export const fetchReviewById = (review_id) => {
  return boardGameFunApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

export const fetchCategories = () => {
  return boardGameFunApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const changeVotes = (review_id, votes) => {
  return boardGameFunApi
    .patch(`/reviews/${review_id}`, {
      inc_votes: `${votes}`,
    })
    .then(({ data }) => {
      return data.review;
    });
};

export const fetchComments = (review_id) => {
  return boardGameFunApi
    .get(`/reviews/${review_id}/comments`)
    .then(({ data }) => {
      return data.review;
    });
};

export const postComment = (username, body, review_id) => {
  return boardGameFunApi
    .post(`/reviews/${review_id}/comments`, {
      username: `${username}`,
      body: `${body}`,
    })
    .then(({ data }) => {
      return data;
    });
};

export const removeHyphen = (input) => {
  const regex = /-/g;
  const output = input.replace(regex, " ");
  return output;
};
