async function submitUser() {
  console.log("submitting user");
  const user = {
    status: "ok",
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  console.log(user);
  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  console.log(data);
}
