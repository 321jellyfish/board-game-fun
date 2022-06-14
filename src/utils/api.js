import axios from "axios";

const boardGameFunApi = axios.create({
  baseURL: "https://board-game-fun.herokuapp.com/api/",
});

export const fetchReviews = () => {
  return boardGameFunApi.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};

export const fetchCategories = () => {
  return boardGameFunApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const removeHyphen = (input) => {
  const regex = /-/g;
  const output = input.replace(regex, " ");
  return output;
};
