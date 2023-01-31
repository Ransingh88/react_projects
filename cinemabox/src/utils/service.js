import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization: `bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
