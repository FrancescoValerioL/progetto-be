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
    let series = [];
    axios
      .get(`http://localhost:2000/api/tv/trendingWeek`)
      .then(function (response) {
        series = response.data.map((elem) => elem);

        resolve(series);
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
    let series = [];
    axios
      .get(`http://localhost:2000/api/tv/topRated`)
      .then(function (response) {
        series = response.data.map((elem) => elem);

        resolve(series);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
}

function popularTv() {
  return new Promise((resolve) => {
    let series = [];
    axios
      .get(`http://localhost:2000/api/tv/popular`)
      .then(function (response) {
        series = response.data.map((elem) => elem);
        resolve(series);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

function ricercaPerGenere(genre) {
  return new Promise((resolve) => {
    let series = [];
    const selectedPage = 1;
    const selectedGenre = genre;
    axios
      .get(`http://localhost:2000/api/tv/ricercaperGenere`, {
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
function notifichePlaceholderMovie() {
  return new Promise((resolve) => {
    let movies = [];
    axios
      .get("http://localhost:2000/api/movie/notificePlaceholder")
      .then(function (response) {
        movies = response.data.map((elem) => elem);
        resolve(movies);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

function notifichePlaceholderTv() {
  return new Promise((resolve) => {
    let series = [];
    axios
      .get("http://localhost:2000/api/tv/notificePlaceholder")
      .then(function (response) {
        series = response.data.map((elem) => elem);
        resolve(series);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export {
  trendingWeekTV,
  topRatedTV,
  popularTv,
  ricercaPerGenere,
  notifichePlaceholderMovie,
  notifichePlaceholderTv,
};
