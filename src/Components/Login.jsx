import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <form action=''>
      <div className='text-white h-[100vh] flex justify-center items-center bg-cover'style={{"background":"url('../src/assets/5.jpg')"}}>
      <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className='text-4xl text-white font-bold'>Login</h1>
        <div className='realtive my-4'>
          <input type='email'className='block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer'/>
          <label htmlFor=''>your Email</label>
          {/* <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'>your email</label> */}
        </div>
        <div className='realtive my-4'>
          <input type='Password' className='block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer'/>
          
          <label htmlFor=''>your Password</label>
        </div>
        <div>
          <input type='checkbox' name="" id=""/>
          <label htmlFor='remember me'></label>
        </div>
        <span> Forget Password?</span>
      </div>
      <button type='submit'>Login</button>
    </div>
    <div>
      <span>New here? <Link to="Register">Create an account</Link></span>
    </div>
    </form>
  )
}
