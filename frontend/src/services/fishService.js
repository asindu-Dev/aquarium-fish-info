import API from "./api";

export const getAllFish = () => API.get("/fish");

export const getFishById = (id) => API.get(`/fish/${id}`);

export const searchFish = (name) =>
  API.get(`/fish/search/${name}`);