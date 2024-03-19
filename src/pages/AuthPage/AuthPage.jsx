import React from "react";
import SignUpForm from "../../compoments/SignUpForm";
import LoginForm from "../../compoments/LoginForm";
import { useState } from "react";
function AuthPage({setUser}){
  const [loginForm, setLoginForm] = useState (false)
  
  function handleFormChange(){
    setLoginForm(prev=>!prev)
  }
    return(
        <>
        <h1>AuthPage</h1>
        <button onClick={handleFormChange}> {loginForm?'Sign Up':'Login'}</button>
        {
            loginForm?<LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser}/>
        }
        
       
        </>
    )
}


export default AuthPage