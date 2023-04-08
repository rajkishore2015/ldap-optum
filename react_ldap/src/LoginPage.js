import React, { useState } from 'react';
import SuccessPage from './Success';

function LoginPage() {
    const[username ,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[isLogin ,setLogin]=useState(false)

    const handleUsername=(event)=>{
        setUsername(event.target.value);
        console.log({username});
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value);
        console.log({password});
    }

    const login=(event)=>{
        if((username!=password)&&username!="krishna"){
            alert('Error! A username and password were submitted are incorrect : ' + username + ' ' + password);
            event.preventDefault();
        }
        else{
            alert('A username and password were submitted: ' + username + ' ' + password);
            event.preventDefault();
            //window.location.reload();
            setLogin(true);
           // window.location.assign("/SuccessPage");
        }

  }

    return (
    <div>
    {
        isLogin ? <SuccessPage /> : <div>
        {/* <form > */}
        <label>
          Username:
          <input type="text" value={username}  onChange={handleUsername}  />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password}  onChange={handlePassword} />
        </label>
        <br />
        <button value="Submit" onClick={login} >Sign In</button>
      {/* </form> */}
    </div>

    }
    </div>

    );

}

export default LoginPage;