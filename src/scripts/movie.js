import axios from "axios";

const trendingWeek = () => {
  let films = [];
  axios
    .get(`http://localhost:2000/api/movie/trendingWeek`)
    .then(function (response) {
      films = response.data.map((elem) => elem);
      console.log(films);
    });
};
function topRated() {
  return new Promise((resolve) => {
    let films = [];
    axios
      .get(`http://localhost:2000/api/movie/topRated`)
      .then(function (response) {
        films = response.data.map((elem) => elem);

        resolve(films);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
}

export { trendingWeek, topRated };
