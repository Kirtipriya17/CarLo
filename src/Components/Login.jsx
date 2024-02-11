import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './Login.css';

export default function () {
  return (
    <div>
    <div className='wrapper'>
    <from action="">
        <h1 className='font-bold text-xl m-2'>Login</h1>
        <div className='input-box'>
            <input type='text' placeholder='user name' required />
            <FaUser />
            </div>
            <div className='input-box'>
            <input type='password' placeholder='password' required />
            <FaLock />
            </div>
            <div className='remember-forgot'>
                <label> <input type='checkbox'/> remember me!</label>
                <a href="#">Forgot password</a>

            </div>
            <button type='Submit'>login </button>
            <div className='register-link'>
                <p>Dont have an account? <a href='#'>register</a></p>

            </div>
           
    </from>
    </div>
    </div>
  )
}
