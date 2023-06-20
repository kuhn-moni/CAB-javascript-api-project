//* 1 fetching the data...

const getAllTeams = () => {
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

getAllTeams();
// *RAUL example - once function is declared, you must run the function at the bottom
// const doSometing = () => {
//   console.log("doing something");
// };

// document.getElementById("button").addEventListener("click", doSometing);

//* 2 function for creating table and dropdown

// *TEAM TABLE DATA
const createTeamTable = () => {
  let table = document.getElementById("teamTable");

  teams.forEach((team, i) => {
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerText = team.name;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerText = team.city;
    row.appendChild(column2);

    let column3 = document.createElement("td");

    column3.innerText = team.conference;
    row.appendChild(column3);
  });
};

//* 3 generate Dropdown options

//* 4 make controller function

//*5 add event listeners

//* 6 fiter by dropdown

//* 7 fiter by date
