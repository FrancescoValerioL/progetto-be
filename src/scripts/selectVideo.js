import axios from "axios";

function selectVideo(movie_id_ext) {
  let movie_id = movie_id_ext;
  return new Promise((resolve) => {
    let link_string = "";
    axios
      .get(`http://localhost:2000/api/movie/trailer`, {
        params: {
          movie_id: movie_id,
        },
      })
      .then(function (response) {
        link_string = response.data.trailer_link;
        resolve(link_string);
        console.log(link_string);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
}
export { selectVideo };
