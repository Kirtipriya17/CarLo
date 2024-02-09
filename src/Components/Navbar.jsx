
import React from 'react'
import { Link } from 'react-router-dom'
export default function  Navbar(){

  return (
  
   <>
   <nav className='flex flex-row justify-between bg-gray- p-5 bg-transparent p-4 '>
   <div className='flex-row flex items-center'>
    <a href=''><img className='h-12 w-13 rounded-full' src='../src/assets/logo.png'/></a>
    <marquee><a href=''><p className='ms-5 text-xl text font-bold '>C A R L O</p></a></marquee> 
    </div>
    

    <div className='flex flex-row items-center'>
     
        
      
        <Link to={'/Home'}>
        <a href=""><p className='ms-5 font-bold text-m '>Home</p> </a>
        </Link>
       
       <Link to={'/About'}>
       <a href=""><p className='ms-5 font-bold text-m '>About</p>
        </a>
       </Link>
        
       <Link to={'/Brands'}>
       <a href=""><p className='ms-5 font-bold text-m'>Brands</p></a>
       </Link>
       <Link to={'/BookingPage'}>
       <a  href=""><p className=' ms-7 font-bold text-m text-black'>Booking</p></a>
       </Link>
       
       <Link to={'/Login'}>
       <a  href=""><p className=' ms-7 font-bold text-m text-black'>LOGIN</p></a>
       </Link>

        

       

       
    </div>
    
    </nav>

    

   </>
    
  )
}
