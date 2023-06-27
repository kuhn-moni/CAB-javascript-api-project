// 1. FETCHING THE DATA
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
      createPlayerTable(playersData); // Call the createPlayerTable function with the initial data
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

// 2. PLAYER TABLE DATA
const createPlayerTable = (playersData) => {
  let table = document.getElementById("playerTable");
  table.innerHTML = ""; // Clear the table before populating it with filtered data

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
    showMoreBtn.addEventListener("click", handleClick);
    column5.appendChild(showMoreBtn);
    row.appendChild(column5);
  });
};

// // 3. FILTER BY TEAM
// const filterByTeam = () => {
//   const teamSelect = document.getElementById("teamSelect");
//   const selectedTeam = teamSelect.value;

//   const url = `https://www.balldontlie.io/api/v1/stats?seasons[]=2022&per_page=100&page=2&team=${selectedTeam}`;
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       const playersData = result.data;
//       console.log("filtered players :>> ", playersData);
//       createPlayerTable(playersData); // Call the createPlayerTable function with the filtered data
//     })
//     .catch((error) => {
//       console.log("error :>> ", error);
//     });
// };
// 3. FILTER BY TEAM
const filterByTeam = (teamName) => {
  const url =
    "https://www.balldontlie.io/api/v1/stats?seasons[]=2022&per_page=100&page=2";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const playersData = result.data;
      const filteredPlayers = playersData.filter(
        (player) => player.team.full_name === teamName
      );
      console.log("filtered players :>> ", filteredPlayers);
      createPlayerTable(filteredPlayers); // Call the createPlayerTable function with the filtered data
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

// 4. EVENT HANDLER FOR SHOW MORE BUTTON
const handleClick = (event) => {
  const playerIdValue = event.target.value;
  console.log("ID", playerIdValue);
  getPlayersAvg(playerIdValue);
};

// 5. GET PLAYER'S SEASON AVERAGE
const getPlayersAvg = (playerIdValue) => {
  const averagesUrl = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerIdValue}`;
  fetch(averagesUrl)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const playersAvg = result.data;
      console.log("AVERAGES :>> ", playersAvg);
      // Update UI or do something with player's season average data
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

// 6. ADD EVENT LISTENERS
const filterButton = document.getElementById("filterButton");
filterButton.addEventListener("click", filterByTeam);

// 7. CALL THE INITIAL FUNCTION
getAllPlayers();
