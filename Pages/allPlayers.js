// * 1 FETCHING THE DATA

const getAllPlayers = () => {
  const url =
    "https://www.balldontlie.io/api/v1/stats?seasons[]=2022&per_page=100&page=1";
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
// *ForEach loop to populate the table with seasonAvg data when clicked

const getPlayersAvg = (playerIdValue) => {
  console.log("in get avgs");
  const averagesUrl = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerIdValue}`;
  console.log(averagesUrl);
  fetch(averagesUrl)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const avg = result.data[0];
      console.log("AVERAGES :>> ", avg);
      // controller(playersAvg);

      // *targeting the modal div/table
      console.log("test");
      const modal = document.getElementById("myModal");
      const tableBody = document
        .getElementById("averageTable")
        .querySelector("tbody");
      // *making sure the tabledata is cleared
      tableBody.innerHTML = "";
      // console.log("avg", avg);
      let row = document.createElement("tr");

      let minPlayedCell = document.createElement("td");
      minPlayedCell.innerText = avg.min;
      row.appendChild(minPlayedCell);

      let pointsCell = document.createElement("td");
      pointsCell.innerText = avg.pts;
      row.appendChild(pointsCell);

      let assistsCell = document.createElement("td");
      assistsCell.innerText = avg.ast;
      row.appendChild(assistsCell);

      let reboundsCell = document.createElement("td");
      reboundsCell.innerText = avg.reb;
      row.appendChild(reboundsCell);

      let stealsCell = document.createElement("td");
      stealsCell.innerText = avg.stl;
      row.appendChild(stealsCell);

      let fgPctCell = document.createElement("td");
      fgPctCell.innerText = avg.fg_pct;
      row.appendChild(fgPctCell);

      let fgaCell = document.createElement("td");
      fgaCell.innerText = avg.fga;
      row.appendChild(fgaCell);

      let fg3PctCell = document.createElement("td");
      fg3PctCell.innerText = avg.fg3_pct;
      row.appendChild(fg3PctCell);

      let turnoversCell = document.createElement("td");
      turnoversCell.innerText = avg.turnover;
      row.appendChild(turnoversCell);
      console.log("row", row);

      tableBody.appendChild(row);
      // }
      modal.style.display = "block";
    })
    .catch((error) => {
      // console.log("error :>> ", error);
    });
};

const modal = document.getElementById("myModal");
const closeButton = document.querySelector(".close");

closeButton.onclick = function () {
  modal.style.display = "none";
};

// *PLAYER ID - handleClickEvent -
const handClick = (event) => {
  const playerIdValue = event.target.value;
  console.log("button clicked - player ID", playerIdValue);
  getPlayersAvg(playerIdValue);
};

getAllPlayers();

//TODO explain the limitation of the api (60 fetches per min) which prevents me from accessing the whole data set of
