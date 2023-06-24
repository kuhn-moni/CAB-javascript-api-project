// const getAllTeams = () => {
//   const url = "https://www.balldontlie.io/api/v1/teams";
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       const teamData = result.data;
//       console.log("team data", teamData);
//       controller(teamData);
//     })
//     .catch((error) => {
//       console.log("error :>> ", error);
//     });
// };

// function controller(teamData) {
//   console.log("controllers", teamData);

//   createTeamTable(teamData);
// }
// !break here
// const teamPromise = await fetch("https://www.balldontlie.io/api/v1/teams");
// const teamData = await teamPromise.json();

// const template = document.querySelector("#team-cards");
// const wrapper = document.createElement("div");

// teamData.forEach(() => {
//   const clone = template.content.cloneNode(true);

//   wrapper.appendChild(result);
// });

// document.querySelector(".teamData").appendChild(wrapper);

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
      wrapper.appendChild(clone);
    });

    document.querySelector(".teamData").appendChild(wrapper);
  } catch (error) {
    console.log("Error fetching team data:", error);
  }
};

fetchTeams();
