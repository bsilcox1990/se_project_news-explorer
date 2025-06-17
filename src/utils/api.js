import { APIkey } from "./constants";
import { dateNow, dateSevenDaysAgo } from "./constants";

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function getNews() {
  return fetch(
    `https://newsapi.org/v2/everything?q=Apple&from=${startDate}&to=${endDate}&pageSize=100&apiKey=${APIkey}`
  ).then(checkResponse);
}

const getFormattedDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const startDate = getFormattedDate(dateSevenDaysAgo);
const endDate = getFormattedDate(dateNow);
