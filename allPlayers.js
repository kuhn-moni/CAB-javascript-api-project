// *FETCHING THE DATA

const getAllPlayers = () => {
  const url = "https://www.balldontlie.io/api/v1/players";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const playersData = result.data;
      console.log("games :>> ", playersData);
      controller(playersData);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

// *PLAYER TABLE DATA
const createPlayerTable = (playersData) => {
  let table = document.getElementById("playerTable");
  console.log("players data table", playersData);

  playersData.forEach((player) => {
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerText = player.first_name;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerText = player.last_name;
    row.appendChild(column2);

    let column3 = document.createElement("td");
    column3.innerText = player.position;
    row.appendChild(column3);

    let column4 = document.createElement("td");
    column4.innerText = player.team.full_name;
    row.appendChild(column4);

    let column5 = document.createElement("td");
    column5.innerText = player.id;
    row.appendChild(column5);
  });
};

//* 3 GENERATE DROP DOWN
const createDropDown = (playersData) => {
  //   console.log("games in CreateDropdownFunction", playersData);
  const dropdown = document.getElementById("leagueDropdown");

  const competitionsArray = playersData.map((playersData) => {
    return playersData.last_name;
  });
};

//* 4 MAKE CONTROLLER FUNCTION

function controller(playersData) {
  console.log("controllers", playersData);
  //get the data
  //we call fetchData outside of this function
  // build table with all data
  createPlayerTable(playersData);

  //generate DropDown filter options
  //   createDropDown(playersData);
  //create filter functions
  //   setEventListeners(playersData);
  // set event listeners
}

getAllPlayers();
