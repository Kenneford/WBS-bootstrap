const apiUrl = "http://localhost:4000";

async function getAuthors() {
  const response = fetch(`${apiUrl}/api/author`);
  const result = (await response).json();
  return result;
}
async function getBooks() {
  const response = fetch(`${apiUrl}/api/book`);
  const result = (await response).json();
  return result;
}
async function postBook() {
  const response = fetch(`${apiUrl}/api/author`);
  const result = (await response).json();
  return result;
}
async function postAuthor(author) {
  const response = await fetch(`${apiUrl}/api/author`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(author),
  });
  if (response.ok) {
    return getAuthors();
  }
  throw Error("Adding author failed");
  //   const result = (await response).json();
  //   return result;
}

export { getAuthors, getBooks, postBook, postAuthor };
