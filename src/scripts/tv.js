import axios from "axios";
/*
const trendingWeekTV = () => {
    let films = []
    axios
    .get(`http://localhost:2000/api/movie/trendingWeek`)
    .then(function (response) {
      films = response.data.map(elem => elem);
      console.log(films)
    });
}
*/
function trendingWeekTV() {
  return new Promise((resolve) => {
    let films = [];
    axios
      .get(`http://localhost:2000/api/tv/trendingWeek`)
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
/*
const topRatedTV = () => {
    let films = []
    axios
    .get(`http://localhost:2000/api/movie/topRated`)
    .then(function (response) {
      films = response.data.map(elem => elem);
      console.log(films)
    });
}*/
function topRatedTV() {
  return new Promise((resolve) => {
    let films = [];
    axios
      .get(`http://localhost:2000/api/tv/topRated`)
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

export { trendingWeekTV, topRatedTV };
