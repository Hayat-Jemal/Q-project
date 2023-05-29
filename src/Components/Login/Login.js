import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

function Login() {
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")

const signIn= (e) => {
    e.preventDefault();
    

}

const register = (e) => {
    e.preventDefault();


}


  return (
    <div className='login' >
        <h1 >Sign-in</h1>
         <form action="">
            <h4 style={{color:'white'}}>Email</h4>
           
            <input type="text" 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}

                   />
            <input type="text"
                   value={password} 
                   onChange={(e) => setPassword(e.target.value)
                }
                   />
             <button className='login-signinButton'
                     type='submit'
                     onClick={signIn}
                     >
                        Sign In
                
                </button>      
         </form>
         <button className='login-registerButton'
                 onClick={register}
                 >
           Create your account
         </button>
    </div>
  )
}

export default Login