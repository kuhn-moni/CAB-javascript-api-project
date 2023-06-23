const teamPromise = await fetch("https://www.balldontlie.io/api/v1/teams");
const teams = await teamPromise.json();

const template = document.querySelector("#team-cards");
const wrapper = document.createElement("div");

teams.forEach((team) => {
  const clone = template.content.cloneNode(true);

  wrapper.appendChild(clone);
});

document.querySelector(".team").appendChild(wrapper);
