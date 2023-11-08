const fetch = require("node-fetch");

// const baseUrl = "https://api.themoviedb.org/3/";
// const now_playing = baseUrl + "movie/now_playing" + "?language=ko-kr";

const baseUrl = "https://api.themoviedb.org/3/";
const url = (name) => {
  return baseUrl + `movie/${name}` + "?language=ko-kr";
};
const searchUrl = (name) => {
  return baseUrl + `search/movie?query=${name}` + "&language=ko-kr";
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjMzMzA4YTJmMGJiMTY0ZTJhZDEwNTE0YWIzMDg2ZiIsInN1YiI6IjYwMmY2YjZiNjRmNzE2MDA0MDU2MjYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JE4tOx9I0MNBy3X-AGsUPZztvJTSo5edEt8HHbIY8go",
  },
};

export const nowPlaying = () =>
  fetch(url("now_playing"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("top_rated"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("popular"), options).then((res) => res.json());

export const detail = (id) => fetch(url(id), options).then((res) => res.json());

export const search = (keyword) =>
  fetch(searchUrl(keyword), options).then((res) => res.json());
