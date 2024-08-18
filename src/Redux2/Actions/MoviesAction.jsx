import axios from "axios";
 
export const getMoviesList = (lang) => (dispatch) => {
 
  const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=592d5558fe91383c9979c4a7c357bfee&language=${lang === 'AR' ? 'ar' : 'en'}&page=1`;

  return axios.get(apiUrl)
    .then((response) => { 
      dispatch({
        type: "GET_MOVIES",
        payload: response.data.results,
      });
    })
    .catch((err) => console.log(err));  
};
