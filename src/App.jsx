import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Brands from './Components/Brands'
import Navbar from './Components/Navbar'
import Maruti from './Pages/Cars/Maruti'
import BMW from './Pages/Cars/BMW'
import Toyota from './Pages/Cars/Toyota'
import Login from './Components/Login';

export default function App() {
  return (
   <div>
    <Navbar/>
    
    <Routes>
      <Route path='/Maruti' element={<Maruti/>}/>
      <Route path='/brands' element={<Brands/>}/>
      <Route path='/bmw' element={<BMW/>}/>
     <Route path='/toyota' element={<Toyota/>}/>
     <Route path='/login' element={<Login/>}/>
     
    </Routes>
    
   </div>
  )
}
