import axios from "axios";

function trendingWeek() {
  return new Promise((resolve) => {
    let films = [];
    axios
      .get(`http://localhost:2000/api/movie/trendingWeek`)
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
function ricercaPerGenereMovie(genre) {
  return new Promise((resolve) => {
    let series = [];
    const selectedPage = 1;
    const selectedGenre = genre;
    axios
      .get(`http://localhost:2000/api/movie/ricercaperGenere`, {
        params: {
          page: selectedPage,
          genre: selectedGenre,
        },
      })
      .then(function (response) {
        series = response.data.map((elem) => elem);
        resolve(series);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export { trendingWeek, topRated, ricercaPerGenereMovie };
