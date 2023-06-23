//* 1 fetching the data...

const getAllTeams = () => {
  const url = "https://www.balldontlie.io/api/v1/teams";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const teamData = result.data;
      console.log("", teamData);
      controller(teamData);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

//* 2 function for creating table and dropdown

// *TEAM TABLE DATA
const createTeamTable = (teamData) => {
  let table = document.getElementById("teamTable");
  teamData.forEach((team, i) => {
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

    let column4 = document.createElement("td");
    column4.innerText = team.division;
    row.appendChild(column4);

    let column5 = document.createElement("td");
    column5.innerText = team.abbreviation;
    row.appendChild(column5);

    let column6 = document.createElement("td");
    column6.innerText = team.full_name;
    row.appendChild(column6);
  });
};
function controller(teamData) {
  console.log("controllers", teamData);
  //get the data
  //we call fetchData outside of this function
  // build table with all data
  createTeamTable(teamData);
}

const filterButtons = document.querySelectorAll(".filter-nav a");
filterButtons.forEach((ele) => {
  ele.addEventListener("click", (e) => handleFilterClick(e));
});

function handleFilterClick(e) {
  let target = e.target;

  e.preventDefault(); //* THIS SECTION IS ONLY FOR CSS - REFRER TO 53MIN IN VID
  filterButtons.forEach((ele) => {
    ele.classList.remove("active");
  });
  target.classList.add("active");

  filterConf(target.dataset.filter);
}

getAllTeams();

// 1 Team page should have filter button between EAST & WEST & SHOW ALL
// 2 when full_name of team is clicked - takes me to List of players PAGE
// 3 List of players page will display filtered players that are on the selected team
// 4 to see season avg of player - you select "SHOW MORE" btn to display a POP UP of their 2022-23 season averages.
//     4.1 ideally with a picture of them too

// https://www.youtube.com/watch?v=S2CxPw-crU8
//     @47min for filter
