// let data = myData; // this Mydata is from response.js
// let totalTeams = data.length; //Mydata variable is now changes to "data""

// console.log("totalTeams :>> ", totalTeams);
// console.log("data", data);

// let firstTeam = data[0]; //this is declaring a variable for the first object (ATL) in the array of teams
// console.log("firstTeam = data[0]", firstTeam); //firstTeam console.log will now show only ATL [0] is the first object in the list
// let secondTeam = data[1]; //*this is an example to show the above point - only example
// console.log("secondTeam = data[1] :>> ", secondTeam);

// // using the dom
// // const myContainer = document.getElementById("team-container"); //"myContainer" is a variable created to link it to "team-container on HTML page" (variable referring to element in html via get ID)
// // let firstElement = document.createElement("p"); // this is creating a "p" tag. you still need to add innertext to it.
// // firstElement.innerText = firstTeam.name; //here we are adding linking firstTeam name property (firstTeam.nam). now the innertext exists in the p tag but u still need a to appendChild to make it visible.
// // myContainer.appendChild(firstElement); //*example from Heron. refer back to this for dom manipulation

// const tBody = document.getElementById("tableBody");

// for (let i = 0; i < data.length; i++) {
//   const tr = document.createElement("tr");

//   const tdName = document.createElement("td");
//   tdName.innerText = data[i].name;

//   const tdCity = document.createElement("td");
//   tdCity.innerText = data[i].city;

//   let tdConference = document.createElement("td");
//   tdConference.innerText = data[i].conference;

//   const tdDivision = document.createElement("td");
//   tdDivision.innerText = data[i].division;

//   const tdAbbreviation = document.createElement("td");
//   tdAbbreviation.innerText = data[i].abbreviation;

//   const tdFname = document.createElement("td");
//   tdFname.innerText = data[i].full_name;

//   tr.appendChild(tdName);
//   tr.appendChild(tdCity);
//   tr.appendChild(tdConference);
//   tr.appendChild(tdDivision);
//   tr.appendChild(tdAbbreviation);
//   tr.appendChild(tdFname);

//   tBody.appendChild(tr);
// }
// -------------------------------------------------//
