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
import About from './Components/About';
import Home from './Components/Home';
import MahindraThar from './Pages/Cars/Mahindra Thar';

export default function App() {
  return (
<<<<<<< HEAD
   <div>
=======


   <div>
    

>>>>>>> 74ed4823055c18cbed2e1bae8bf60a034389ed0f
    <Navbar/>
    
    <Routes>
      <Route path='/Maruti' element={<Maruti/>}/>
      <Route path='/brands' element={<Brands/>}/>
      <Route path='/bmw' element={<BMW/>}/>
     <Route path='/toyota' element={<Toyota/>}/>
     <Route path='/MahindraThar' element={<MahindraThar/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/home' element={<Home/>}/>
     
    </Routes>
    
   </div>
  )
}
