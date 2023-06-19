async function logJSONData() {
  const response = await fetch("https://www.balldontlie.io/api/v1/players");
  const jsonData = await response.json();
  console.log(jsonData);
}
