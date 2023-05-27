import { useState } from "react";

function UsernameForm() {
    const[username, setUsername] = useState("");
    const updateUsername = () => {
        console.log("CHANGE");
    }
    return(
        <>
         <input type="text" placeholder="username" value={username}
         onChange={updateUsername}/>
         <button>Submit</button>
        </>
    )
}

export default UsernameForm;