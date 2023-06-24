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

// const teamPromise = await fetch("https://www.balldontlie.io/api/v1/teams");
// const teams = await teamPromise.json();

const template = document.querySelector("#team-cards");
const wrapper = document.createElement("div");

teams.forEach((teams) => {
  const clone = template.content.cloneNode(true);

  wrapper.appendChild(clone);
});

document.querySelector(".teams").appendChild(wrapper);
