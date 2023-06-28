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

const renderTeams = (teams) => {
  const template = document.querySelector("#team-cards");
  const wrapper = document.createElement("div");

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

    // Dynamically set the SVG image source
    const logoImg = clone.querySelector(".team-logo");
    logoImg.src = `/Assets/team logos/${team.abbreviation}.svg`;
    logoImg.alt = team.abbreviation;

    wrapper.appendChild(clone);
  });

  const teamDataDiv = document.querySelector(".teamData");
  teamDataDiv.innerHTML = "";
  teamDataDiv.appendChild(wrapper);
};

//filter function EAST WEST CONF
const filterTeams = (filter) => {
  if (filter === "all") {
    renderTeams(teamData);
  } else {
    const filteredTeams = teamData.filter((team) => team.conference === filter);
    renderTeams(filteredTeams);
  }
};

//event listner to recognise clicks on button
document.querySelectorAll(".filter-nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    // event.preventDefault();
    const filter = event.target.getAttribute("data-filter");
    filterTeams(filter);
  });
});

function getPlayers() {}

fetchTeams();
