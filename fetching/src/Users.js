
import { useState, useEffect } from "react";

function Users ({url}){
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
  
    useEffect(() =>{readUsers()}, [])
  
    const readUsers = async () =>{
      setIsLoading(true)
      let response = await fetch(url)
      let result = await response.json()
      console.log(result.results)
      setIsLoading(false)
      setUsers(() => result.results)
}
let usersList = users.map((user) =>{
    return(
      <li key={user.id.value}>
        <div>
          {user.name.first} {user.name.last}
        </div>
        <>
          <img src={user.picture.large} />
        </>
        <div>{user.email}</div>
        <div>{user.phone}</div>
      </li>
    )
  })
  
  if (isLoading){
    usersList = (<div>Loading...</div>)
  }
  
    return(
        <>
          <button onClick={readUsers}>Load Users</button>
          <ul>
            {usersList}
          </ul>
        </>
    )
  }
export default Users;