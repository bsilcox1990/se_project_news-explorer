import { APIkey, baseURL } from "./constants";
import { startDate, endDate } from "./constants";

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function getNews(query) {
  return fetch(
    `${baseURL}?q=${query}&from=${startDate}&to=${endDate}&pageSize=100&apiKey=${APIkey}`
  ).then(checkResponse);
}
