const fetchTeams = async () => {
  try {
    const teamPromise = await fetch("https://www.balldontlie.io/api/v1/teams");
    const response = await teamPromise.json();

    const teamData = response.data;
    console.log(teamData);
    const template = document.querySelector("#team-cards");
    const wrapper = document.createElement("div");

    teamData.forEach((team) => {
      const clone = template.content.cloneNode(true);
      clone.querySelector(".team-name").textContent = team.full_name;
      clone.querySelector(".team-city").textContent = team.city;
      clone.querySelector(".team-conference").textContent = team.conference;
      clone.querySelector(".team-abbreviation").textContent = team.abbreviation;
      clone.querySelector(".team-division").textContent = team.division;
      clone.querySelector(".primary-btn").textContent = `current team`;

      const logoImg = clone.querySelector(".team-logo");
      logoImg.src = `/Assets/team logos/${team.abbreviation}.svg`;
      logoImg.alt = team.abbreviation;

      const primaryBtn = clone.querySelector(".primary-btn");
      primaryBtn.addEventListener("click", () => {
        const teamName = team.full_name;
        filterPlayersByTeam(teamName);
      });

      wrapper.appendChild(clone);
    });

    document.querySelector(".teamData").appendChild(wrapper);
  } catch (error) {
    console.log("Error fetching team data:", error);
  }
};

const filterPlayersByTeam = (teamName) => {
  const url = `https://www.balldontlie.io/api/v1/stats?seasons[]=2022&per_page=100&page=2&team_names[]=${teamName}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const playersData = result.data;
      console.log("games :>> ", result);
      createPlayerTable(playersData);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

fetchTeams();
