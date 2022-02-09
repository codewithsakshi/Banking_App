import React, {useState, useEffect} from "react";
import UserForm from "./UserForm";

export default function Users(){
const [users, setUsers] = useState([])

const updatedLocalStorage = (users) => {
localStorage.setItem("users", JSON.stringify(users))
}

useEffect(() => {
    try{
    const usersFromStorage = localStorage.getItem("users")
    if(Array.isArray(usersFromStorage) && usersFromStorage.length > 0){
        setUsers(usersFromStorage)
    }
    }catch(err){
        console.log("err")
    }
})

const addUser = (user) => {
    const updateUsers = [...users, user]
    updatedLocalStorage(updateUsers)
    setUsers(updateUsers)
}

return(
    <div>
     <UserForm addUser={addUser}/>
    </div>
)
}