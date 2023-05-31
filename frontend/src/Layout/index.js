import { Routes, Route } from 'react-router-dom';

import About from './About/About.js';
import Nav from './Nav';
import Home from './Home/Home.js';

import './Layout.css'

function Layout() {
  return (
    <>
      <div className='layout'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
    </>
  )
}

export default Layout;