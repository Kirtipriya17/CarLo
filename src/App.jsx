import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Brands from './Components/Brands'
import Navbar from './Components/Navbar.jsx'
import Maruti from './Pages/Brand/Maruti'
import BMW from './Pages/Brand/BMW'
import Toyota from './Pages/Brand/Toyota'
import Login from './Components/Login';
import About from './Components/About';
import Home from './Components/Home';
import Cars from './Components/Cars';
import MahindraThar from './Pages/Mahindra/Mahindra Thar';
import Mahindra from './Pages/Brand/Mahindra';
import Footer from './Components/Footer.jsx';
import Register from './Components/Register.jsx';
import BookingPage from './Components/BookingPage.jsx';


export default function App() {
  return (


   <div>
    

    <Navbar/>
    
    <Routes>
      <Route path='/Maruti' element={<Maruti/>}/>
      <Route path='/brands' element={<Brands/>}/>
      <Route path='/bmw' element={<BMW/>}/>
     <Route path='/toyota' element={<Toyota/>}/>
     <Route path='/Mahindra' element={<Mahindra/>}/>
     <Route path='/MahindraThar' element={<MahindraThar/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/' element={<Home/>}/>
     <Route path='/Car' element={<Cars/>}/>
     <Route path='/Register' element={<Register/>}/>
     <Route path='/BookingPage' element={<BookingPage/>}/>
     
     
    </Routes>
   <Footer/>
    
   </div>
  )
}
