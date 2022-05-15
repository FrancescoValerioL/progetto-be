import axios from "axios";

const trendingWeek = () => {
    let films = []
    axios
    .get(`http://localhost:2000/api/movie/trendingWeek`)
    .then(function (response) {
      films = response.data.map(elem => elem);
      console.log(films)
    });
}
const topRated = () => {
    let films = []
    axios
    .get(`http://localhost:2000/api/movie/topRated`)
    .then(function (response) {
      films = response.data.map(elem => elem);
      console.log(films)
    });
}

export { trendingWeek, topRated }