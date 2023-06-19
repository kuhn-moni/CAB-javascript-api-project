//* 1 fetching the data...

const getAllPlayers = () => {
  const url = "https://www.balldontlie.io/api/v1/players";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log("result", result);
      const games = result.data;
      console.log("games :>> ", games);
      // controller(games);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

getAllPlayers();
// *RAUL example - once function is declared, you must run the function at the bottom
// const doSometing = () => {
//   console.log("doing something");
// };

// document.getElementById("button").addEventListener("click", doSometing);

//* 2 function for creating table and dropdown

//* 3 generate Dropdown options

//* 4 make controller function

//*5 add event listeners

//* 6 fiter by dropdown

//* 7 fiter by date
