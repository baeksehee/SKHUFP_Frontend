import axios from "axios";

export const instance = axios.create({
  baseURL: "http://3.34.215.12:8080/",
  headers: {},
});