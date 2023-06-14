// $(document).ready(function () {
//   $("Index").DataTable();
// });

fetch("https://www.balldontlie.io/api/v1/players")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const markup = <li>${user.name}</li>;

      document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
    });
  })
  .catch((error) => console.log(error));
