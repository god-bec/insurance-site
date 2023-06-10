import {React, useState} from 'react'
import { Link} from 'react-router-dom'
import './LoginIntro.css'


export const LoginInput = (props) => {
const [email, setEmail] = useState(""); 
const [passW, setPassW] = useState(""); 
const getEmail = (e)=>{
   const getData = e.target.value;
    setEmail(getData)
}
const getpass = (e)=>{
   const getpass = e.target.value;
    setPassW(getpass);
    // console.log(getpass)
}
const submitForm = (e)=>{
    e.preventDefault();
    //upgrade code to object construtor
    const user = [{
                   email,
                   passW
                    }]
                    setEmail("")
                    setPassW("");
                    console.log(user)
                    
 }


    
  return (
    <div className='input-main-Cont'>
        <form className='inputContainer'>
               <h1>{props.title}</h1>
               <p>{props.text}</p>

               <div className="input-DIV">
                <input type="email" placeholder='Email adress or HMO ID' value={email} onChange={getEmail}/><br/><br/>
                <input type="password" placeholder='password' value={passW}onChange={getpass}/><br/>
                <button onClick={submitForm}>Login</button> 
               </div>
               <p>Forgot password? <Link>Click here</Link></p>
        </form>
    </div>
  )
}
