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
        isLogin ? <SuccessPage /> : <div class="container">
        <form class="form-signin" method="post" action="http://localhost:8080/login">
          <h2 class="form-signin-heading">Please sign in</h2>
          <p>
            <label for="username" class="sr-only">Username</label>
            <input type="text" id="username" name="username" class="form-control" placeholder="Username" required autofocus/>
            </p>
            <p>
              <label for="password" class="sr-only">Password</label>
              <input type="password" id="password" name="password" class="form-control" placeholder="Password" required/>
            </p>
              {/* <input name="_csrf" type="hidden" value="EGOfPDpH1ZaQGy43u6ULhYmh0U11FzphW0Lr_Y_h3ySZ-GL2IVGoDwx2sfK9IhkG2Ig_tr-Y_HURdQJMPSOOxezY6UKqzVPC" /> */}
              <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>

    }
    </div>

    );

}

export default LoginPage;