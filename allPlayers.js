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
  table.innerHTML = ""; // Clear the table before adding filtered rows

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
    const showMoreBtn = document.createElement("button");
    showMoreBtn.classList.add("showMoreBtn");
    showMoreBtn.value = player.player.id;
    showMoreBtn.innerText = "Show More";
    showMoreBtn.addEventListener("click", handClick);

    column5.appendChild(showMoreBtn);
    row.appendChild(column5);
  });
};

// * 3 MAKE CONTROLLER FUNCTION
function controller(playersData) {
  console.log("controllers", playersData);
  createPlayerTable(playersData);
  console.count;
}

// *PLAYER ID - handleClickEvent -
const handClick = (event) => {
  const playerIdValue = event.target.value;
  const teamName =
    event.target.parentElement.parentElement.querySelector(
      "td:nth-child(4)"
    ).innerText;
  console.log("ID", playerIdValue);
  console.log("Team", teamName);

  fetch("https://www.balldontlie.io/api/v1/teams")
    .then((response) => response.json())
    .then((result) => {
      const teams = result.data;
      const filteredPlayersData = playersData.filter(
        (player) => player.team.full_name === teamName
      );
      controller(filteredPlayersData);
    })
    .catch((error) => {
      console.log("Error fetching team data:", error);
    });
};

getAllPlayers();
