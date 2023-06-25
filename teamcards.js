const fetchTeams = async () => {
  try {
    const teamPromise = await fetch("https://www.balldontlie.io/api/v1/teams");
    const response = await teamPromise.json();

    const teamData = response.data;

    const template = document.querySelector("#team-cards");
    const wrapper = document.createElement("div");

    teamData.forEach((team) => {
      const clone = template.content.cloneNode(true);
      clone.querySelector(".team-name").textContent = team.full_name;
      clone.querySelector(".team-city").textContent = team.city;
      clone.querySelector(".team-conference").textContent = team.conference;
      clone.querySelector(".team-abbreviation").textContent = team.abbreviation;
      clone.querySelector(".team-division").textContent = team.division;

      // Dynamically set the SVG image source
      const logoImg = clone.querySelector(".team-logo");
      logoImg.src = `/Assets/team logos/${team.abbreviation}.svg`;
      logoImg.alt = team.abbreviation;

      wrapper.appendChild(clone);
    });

    document.querySelector(".teamData").appendChild(wrapper);
  } catch (error) {
    console.log("Error fetching team data:", error);
  }
};

fetchTeams();
