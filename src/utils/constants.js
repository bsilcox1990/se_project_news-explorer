import { getFormattedDate } from "./helpers";

export const APIkey = import.meta.env.VITE_API_KEY;
export const baseURL = "https://newsapi.org/v2/everything";
export const dateNow = new Date();
export const dateSevenDaysAgo = new Date();
dateSevenDaysAgo.setDate(dateNow.getDate() - 7);
export const startDate = getFormattedDate(dateSevenDaysAgo);
export const endDate = getFormattedDate(dateNow);
