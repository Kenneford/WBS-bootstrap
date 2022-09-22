import "./App.css";
import { Routes, Route } from "react-router-dom";
import Books from "./views/Books";
import Authors from "./views/Authors";
import { useState, useEffect } from "react";
import { getAuthors, postAuthor } from "./controllers/api";

function App() {
  const [data, setData] = useState({
    books: [],
    authors: [],
  });

  async function readData() {
    const authors = await getAuthors();
    console.log(authors);
    setData((prev) => {
      return { ...prev, authors };
    });
  }
  const addAuthor = async (author) => {
    const authors = await postAuthor(author);
    console.log(authors);
    setData((prev) => {
      return { ...prev, authors };
    });
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="App">
      <h1>My Library</h1>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route
          path="/author"
          element={<Authors authors={data.authors} addAuthor={addAuthor} />}
        />
      </Routes>
    </div>
  );
}

export default App;
