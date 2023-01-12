import axios from "axios";

const TOKEN = localStorage.getItem("ACCESS_TOKEN");

// 해당 url의 server로 전달될 token
export const instance = axios.create({
  baseURL: "http://3.34.215.12:8080/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + TOKEN,
  },
});

// https://thinkforthink.tistory.com/372
// access toke->refresh token
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    const originalRequest = config;

    if (status === 403) {
      const accessToken = localStorage.getItem("ACCESS_TOKEN");
      const refreshToken = localStorage.getItem("REFRESH_TOKEN");

      try {
        const { data } = await axios({
          method: "post",
          url: `/login`,
          data: { accessToken, refreshToken },
        });

        const newAccessToken = data.data.accessToken;
        const newRefreshToken = data.data.refreshToken;

        originalRequest.headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + newAccessToken,
        };

        localStorage.setItem("ACCESS_TOKEN", newAccessToken);
        localStorage.setItem("REFRESH_TOKEN", newRefreshToken);

        return await axios(originalRequest);
      } catch (err) {
        new Error(error);
      }
    }
    return Promise.reject(error);
  }
);
