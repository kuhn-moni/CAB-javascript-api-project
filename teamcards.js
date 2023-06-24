// Fetch the API data
fetch("https://www.balldontlie.io/api/v1/teams")
  .then((response) => response.json())
  .then((data) => {
    // Process the API response
    const fetchedObjects = data.objects;

    // Add the images to the objects
    fetchedObjects.forEach((obj, index) => {
      const imageUrl = `https://loodibee.com/wp-content/uploads/nba-${index}480x480.png`; // Replace with the actual image URL or logic to determine the URL

      obj.imageURL = imageUrl;
    });

    // Use the modified objects
    console.log(fetchedObjects); // You can now access the fetchedObjects with the added imageURL property
  })
  .catch((error) => {
    console.log("Error fetching API data:", error);
  });

// const getAllTeams = () => {
//   const url = "https://www.balldontlie.io/api/v1/teams";
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       const teamData = result.data;
//       console.log("", teamData);
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
// const teamPromise = await fetch("https://www.balldontlie.io/api/v1/teams");
// const teams = await teamPromise.json();

// const template = document.querySelector("#team-cards");
// const wrapper = document.createElement("div");

// teamsData.forEach(() => {
//   const clone = template.content.cloneNode(true);

//   wrapper.appendChild(result);
// });

// document.querySelector(".teamData").appendChild(wrapper);

// getAllTeams()
