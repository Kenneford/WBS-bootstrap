const pets = require("./helper");
const express = require("express");

const app = express();

const port = 7000;

app.get("/animals", (req, res) => {
  res.send(`
	<h1>Adopt a Pet</h1>
	<p>Browse through the links below to find your new furry friend:</p>
	<ul>
	<li><a href="/animals/dogs">Dogs</a></li>
	<li><a href="/animals/cats">Cats</a></li>
	<li><a href="animals/rabbits">Rabbits</a></li>
	</ul>
	`);
});

app.get("/animals/:pet_type", (req, res) => {
  const petsType = pets[req.params.pet_type];
  let result = `
	<h1>List of ${req.params.pet_type}</h1>
	`;
  result += "<ul>";
  for (let i = 0; i < petsType.lenght; i++) {
    const pet = petsType[i];
    result += `<li><a href="/animal/:{req.params.pet_type}">${pet.name}</a></li>`;
  }
  result += `</ul>`;
  res.send(result);
});

// app.get("/animals2/:pet_type", (req, res) => {
//   console.log(pets[req.params.pet_type]);
//   const lines = pets[req.params.pet_type]
//     .map((pet, index) => {
//       return `
//         <li><a href="/animals/${req.params.pet_type}/${index}">${pet.name}</a></li>
//         `;
//     })
//     .join("");
//   console.log(lines);
//   res.send(`
//         <h1>List of ${req.params.pet_type}</h1>
//         <ul>
//             ${lines}
//         </ul>
//     `);
// });

app.get("/animals/:pet_type/:pet_id", (req, res) => {
  const pet = pets[req.params.pet_type][req.params.pet_id];
  res.send(
    `
		<h1>${pet.name}</h1>
		<h3>${pet.breed}</h3>
		<img src="${pet.url}">
		<p>${pet.description}</p>
		`
  );
});

app.listen(port, () => console.log("server listening at " + port));
