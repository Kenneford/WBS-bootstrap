import { useState, useEffect } from "react";

export default function Authors({ authors = [], addAuthor }) {
  const [newName, setNewName] = useState("");
  const [newBirthYear, setNewBirthYear] = useState("");
  const rows = authors.map((element, id) => {
    return (
      <div className="tableCont" key={id}>
        <div>{element.name}</div>
        <div>{element.birth_year}</div>
      </div>
    );
  });

  function handleAddingAuthor() {
    console.log(newName, newBirthYear);
    addAuthor({
      name: newName,
      birthYear: newBirthYear,
    });
  }
  return (
    <div>
      <h1>My Favorite Authors</h1>
      <div className="tableRow">{rows}</div>
      <div>It's me</div>
      <div>
        <input
          placeholder="name"
          value={newName}
          onChange={({ target }) => setNewName(target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Birth year"
          value={newBirthYear}
          onChange={({ target }) => setNewBirthYear(target.value)}
        />
      </div>
      <div>
        <button onClick={handleAddingAuthor}>Add Author</button>
      </div>
    </div>
  );
}
