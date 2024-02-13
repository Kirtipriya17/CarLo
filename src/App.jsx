import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Brands from './Components/Brands'
import Navbar from './Components/Navbar.jsx'
import Login from './Components/Login';
import About from './Components/About';
import Home from './Components/Home';
import Cars from './Components/Cars';
import Footer from './Components/Footer.jsx';
import Register from './Components/Register.jsx';
import BookingPage from './Components/BookingPage.jsx';

import Tata from './Pages/Brand/Tata.jsx';
import Maruti from './Pages/Brand/Maruti.jsx';
import Toyota from './Pages/Brand/Toyota.jsx';
import BMW from './Pages/Brand/BMW.jsx';
import Mahindra from './Pages/Brand/Mahindra.jsx';
import Audi from './Pages/Brand/Audi.jsx';
import Kia from './Pages/Brand/Kia.jsx';
import Jaguar from './Pages/Brand/Jaguar.jsx';
import Hyundai from './Pages/Brand/Hyundai.jsx';
import RollsRoyce from './Pages/Brand/RollsRoyce.jsx';
import MercedesBenz from './Pages/Brand/MercedesBenz.jsx';
import Lamborghini from './Pages/Brand/Lamborghini.jsx';
import AstonMartin from './Pages/Brand/AstonMartin.jsx';
import Ferrari from './Pages/Brand/Ferrari.jsx';
import Porsche from './Pages/Brand/Porsche.jsx';
import Volvo from './Pages/Brand/Volvo.jsx';

import MahindraThar from './Pages/Mahindra/Mahindra Thar.jsx';


export default function App() {
  return (


   <div>
    

    {/* <Navbar/> */}
    
    <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/brands' element={<Brands/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/Register' element={<Register/>}/>
     <Route path='/BookingPage' element={<BookingPage/>}/>
     <Route path='/Car' element={<Cars/>}/>
     

     <Route path='/Tata' element={<Tata/>}/>
     <Route path='/Maruti' element={<Maruti/>}/>
     <Route path='/Toyota' element={<Toyota/>}/>
     <Route path='/BMW' element={<BMW/>}/>
     <Route path='/Mahindra' element={<Mahindra/>}/>
     <Route path='/Audi' element={<Audi/>}/>
     <Route path='/Kia' element={<Kia/>}/>
     <Route path='/Jaguar' element={<Jaguar/>}/>
     <Route path='/Hyundai' element={<Hyundai/>}/>
     <Route path='RollsRoyce/' element={<RollsRoyce/>}/>
     <Route path='/MercedesBenz' element={<MercedesBenz/>}/>
     <Route path='/Lamborghini' element={<Lamborghini/>}/>
     <Route path='/AstonMartin' element={<AstonMartin/>}/>
     <Route path='/Ferrari' element={<Ferrari/>}/>
     <Route path='/Porsche' element={<Porsche/>}/>
     <Route path='/Volvo' element={<Volvo/>}/>

     <Route path='/MahindraThar' element={<MahindraThar/>}/>

     
    </Routes>
   {/* <Footer/> */}
    
   </div>
  )
}
