// * FETCHING DATA USING ASYNC
let teamData = [];

const fetchTeams = async () => {
  try {
    const teamPromise = await fetch("https://www.balldontlie.io/api/v1/teams");
    const response = await teamPromise.json();

    teamData = response.data;
    console.log(teamData);
    renderTeams(teamData);
  } catch (error) {
    console.log("Error fetching team data:", error);
  }
};
//*FILTER FUNCTION TO RENDER/HIDE TEAMS
// !NEEDS TO BE UNDERSTOOD BETTER
const renderTeams = (teams) => {
  const template = document.querySelector("#team-cards");
  const wrapper = document.createElement("div");

  // *FOR EACH LOOPING THROUGH THE KEY VALUES
  teams.forEach((team) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".team-name").textContent = team.full_name;
    clone.querySelector(".team-city").textContent = team.city;
    clone.querySelector(".team-conference").textContent = team.conference;
    clone.querySelector(".team-abbreviation").textContent = team.abbreviation;
    clone.querySelector(".team-division").textContent = team.division;
    clone
      .querySelector(".primary-btn")
      .setAttribute("href", `/Pages/playerslist.html?team=${team.full_name}`);
    clone.querySelector(".primary-btn").textContent = "Current Players";

    //* ADDING TEAM LOGO IMG TO RELEVANT TEAM CARDS
    const logoImg = clone.querySelector(".team-logo");
    logoImg.src = `/Assets/team logos/${team.abbreviation}.svg`;
    logoImg.alt = team.abbreviation;

    wrapper.appendChild(clone);
  });

  const teamDataDiv = document.querySelector(".teamData");
  teamDataDiv.innerHTML = "";
  teamDataDiv.appendChild(wrapper);
};

//*FILTER FUNCTION FOR EAST AND WEST CONF
const filterTeams = (filter) => {
  if (filter === "all") {
    renderTeams(teamData);
  } else {
    const filteredTeams = teamData.filter((team) => team.conference === filter);
    renderTeams(filteredTeams);
  }
};

//*EVENT LISTENER FOR BUTTON TO FILTER BETWEEN EAST AND WEST
document.querySelectorAll(".filter-nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    // event.preventDefault();
    const filter = event.target.getAttribute("data-filter");
    filterTeams(filter);
  });
});

function getPlayers() {}

fetchTeams();
