import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './index.css'
import Navbar from './Components/Navbar';
import { Home, Contact, About, Projects } from './Pages';

const App = () => {
  return (
    <main className='bg-black h-full'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/contacts" element={<Contact/>}/>
        </Routes>
      </Router>
    </main>
  ) 
}

export default App

