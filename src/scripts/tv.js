import axios from "axios";

const trendingWeekTV = () => {
    let films = []
    axios
    .get(`http://localhost:2000/api/movie/trendingWeek`)
    .then(function (response) {
      films = response.data.map(elem => elem);
      console.log(films)
    });
}
const topRatedTV = () => {
    let films = []
    axios
    .get(`http://localhost:2000/api/movie/topRated`)
    .then(function (response) {
      films = response.data.map(elem => elem);
      console.log(films)
    });
}

export {trendingWeekTV, topRatedTV}