// * 1 FETCHING THE DATA

const getAllPlayers = () => {
  const url =
    "https://www.balldontlie.io/api/v1/stats?seasons[]=2022&per_page=100&page=2";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const playersData = result.data;
      console.log("games :>> ", result);
      controller(playersData);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

// * 2 PLAYER TABLE DATA
const createPlayerTable = (playersData) => {
  let table = document.getElementById("playerTable");

  // console.log("players data table", playersData);

  playersData.forEach((player) => {
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerText = player.player.first_name;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerText = player.player.last_name;
    row.appendChild(column2);

    let column3 = document.createElement("td");
    column3.innerText = player.player.position;
    row.appendChild(column3);

    let column4 = document.createElement("td");
    column4.innerText = player.team.full_name;
    row.appendChild(column4);

    let column5 = document.createElement("td");
    const showMoreBtn = document.createElement("Button");
    showMoreBtn.classList.add("showMoreBtn");
    // console.log(showMoreBtn);
    // console.log(
    //   "here is the value of the player.player.id nested property which varies for each iteration of our loop",
    //   player.player.id
    // );
    showMoreBtn.value = player.player.id;
    // console.log("showMoreBtn.value =", showMoreBtn.value); //!HERE IS ALL PLAYER ID TO BE SHOWN ON CLG
    showMoreBtn.innerText = "Show More";
    showMoreBtn.addEventListener("click", handClick);

    column5.appendChild(showMoreBtn);
    row.appendChild(column5);
  });
};
const btn = document.getElementsByClassName("showMoreBtn");
// console.log("Player ID :>> ", btn);

//* 3 MAKE CONTROLLER FUNCTION
function controller(playersData) {
  console.log("controllers", playersData);
  createPlayerTable(playersData);
  // addEventListener(playersData);
  console.count;
}

// * 4 URL FOR PLAYERS SEASON AVERAGE

const getPlayersAvg = (playerIdValue) => {
  const averagesUrl = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerIdValue}`;
  fetch(averagesUrl)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const playersAvg = result.data;
      console.log("AVERAGES :>> ", playersAvg);
      controller(playersAvg);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

// *PLAYER ID - handleClickEvent -
const handClick = (event) => {
  const playerIdValue = event.target.value;
  console.log("ID", playerIdValue);
  getPlayersAvg(playerIdValue);
};

getAllPlayers();

// !getting season average with event
// *Adding player id into quea
// create button in ID column - DOM manipulation
// ID of the button is ID of Player (player.player.id)
// create handleButtonClick(event) function (what we want to happen when click happens) - have console log (event) to see if it recognized
// add eventlisteners to each button - onlcick event.pass hanlde function as callback
// this is what i will pass as a callback
// from here, event.target.value must be made into variable which is then placed at the end of the season average URL

//proimseALL to fetch top 5 players from each teama
