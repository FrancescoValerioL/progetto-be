import axios from "axios";

function ricercaPerTitolo(title) {
  return new Promise((resolve) => {
    let titles = [];
    const selectedTitle = title;
    axios
      .get(`http://localhost:2000/api/tv/ricercaMulti`, {
        params: {
          titolo: selectedTitle,
        },
      })
      .then(function (response) {
        titles = response.data.map((elem) => elem);
        resolve(titles);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}
export { ricercaPerTitolo };
