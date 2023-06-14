let data = myData; // this data is from response.js
let totalTeams = data.length;
console.log("totalTeams :>> ", totalTeams);
console.log("data>>>>", data);
let firstTeam = data[0]; //this is declaring a variable for the first object (ATL) in the array of teams
console.log("firstTeam = data[0]", firstTeam);
let secondTeam = data[1]; //this is an example to show the above point

// using the dom
const myContainer = document.getElementById("team-container"); //"myContainer" is a variable created to link it to "team-container on HTML page" (variable referring to element in html via get ID)
let firstElement = document.createElement("p"); // this is creating a "p" tag. you still need to add innertext to it.
firstElement.innerText = firstTeam.name; //here we are adding linking firstTeam name property (firstTeam.nam). now the innertext exists in the p tag but u still need a to appendChild to make it visible.
myContainer.appendChild(firstElement);

// dynamically do the teams
for (let i = 0; i < totalTeams; i++) {
  console.log(i);
  //   console.log(data[3]);
}
