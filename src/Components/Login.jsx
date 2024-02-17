import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login() {


  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const navigation = useNavigate()

  function handleLogin(e) {
    e.preventDefault();
    const body = {
      email, password
    }
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(response => {
      if (response.status === 200) {
        response.json().then(json => {
          localStorage.setItem("userToken", json.token)
          alert("Login Successful")
          navigation("/MahindraThar")

        })

        //  localStorage.setItem("userToken",)

        // return  response.json()
      } else {
        alert("Response was not successful")
        response.json().then(json => {
          alert(json.message)
        })

        // return response.json()
        // alert(response.body.message)
        // throw new Error(response)
      }
    }).catch(error => alert(error))


  }

  return (
    <div >
      <form onSubmit={handleLogin} action=''>
        <div className='text-white h-[100vh] flex justify-center items-center bg-cover ' style={{ "background": "url('../src/assets/11.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }}>
          <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm bg-opacity-30 relative'>
            <h1 className='text-4xl text-white font-bold size-25 flex justify-center'>Login</h1>
            <div className='relative my-4 m-2 p-3'>
              < FaUser />
              <input type='email' className='block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder='' value={email}
                onChange={(e) =>
                  setemail(e.target.value)} />
              <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-tanslate-y-0 peer-focus:scale-75 peer-focus:translate-y-6 '>Your Email</label>

            </div>
            <div className='relative my-4 m-2 p-3'>
              <RiLockPasswordFill />
              <input type='password' className='block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder='' value={password}
                onChange={(e) =>
                  setpassword(e.target.value)} />
              <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-tanslate-y-0 peer-focus:scale-75 peer-focus:translate-y-6 '>Your Password</label>
            </div>
            <div className='flex justify-between items-center '>
              < input type='checkbox' name="" id="" />
              <label className="hover:text-blue-500  " htmlFor='remember me'>Remember me</label>
            </div>
            <div>
              <span> Forget Password?</span>

            </div>
            <div>
              <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type='submit' onClick={handleLogin} >Login</button>
            </div>



            <span>New here? <Link to="Register" className='text-blue-500'>Create an account</Link></span>
          </div>


        </div>
        <div>

        </div>
      </form>

    </div>
  )
}

