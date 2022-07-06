import "./styles.css";
import ReactDOM from 'react-dom/client';
import Users from "./Users";
const ul = document.getElementById("users"); // Get the element where we will place our users
const url = "https://randomuser.me/api/?results=10"; // Get 10 random users

const renderUsers = (data) => {
  const users = data.results;
  console.debug({ users });

  return users.map((user) => {
    return (ul.innerHTML += `
    <li>
      <img src="${user.picture.medium}" />
      <p>${user.name.first} ${user.name.last}</p>
      <div>${user.email}</div>
    </li>`);
  });
};

/**
 * Don't edit the code above
 * ---
 * Below you will have to fetch the data from the link (stored in the variable url)
 * Once retrieved, you will pass the result as an argument of the function renderUsers
 */

//  function Users (){
//   const [users, setUsers] = useState([])
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() =>{readUsers()}, [])

//   const readUsers = async () =>{
//     setIsLoading(true)
//     let response = await fetch(url)
//     let result = await response.json()
//     console.log(result.results)
//     setIsLoading(false)
//     setUsers(() => result.results)
//   }


// let usersList = users.map((user) =>{
//   return(
//     <li key={user.id.value}>
//       <div>
//         {user.name.first} {user.name.last}
//       </div>
//       <>
//         <img src={user.picture.large} />
//       </>
//       <div>{user.email}</div>
//       <div>{user.phone}</div>
//     </li>
//   )
// })

// if (isLoading){
//   usersList = (<div>Loading...</div>)
// }

//   return(
//       <>
//         <button onClick={readUsers}>Load Users</button>
//         <ul>
//           {usersList}
//         </ul>
//       </>
//   )
// }

// async function readUsers(){
//   let response = await fetch(url)
//   let result = await response.json()
//   console.log(result.results)
// }

export default Users
const root = ReactDOM.createRoot(document.getElementById('users'))
root.render(
  <Users url={url}/>
)
