import axios from "axios";

const boardGameFunApi = axios.create({
  baseURL: "https://board-game-fun.herokuapp.com/api/",
});

export const fetchReviews = () => {
  return boardGameFunApi.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};
