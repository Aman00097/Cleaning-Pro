import { createContext, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Context = createContext();


const menus = [
  {
    title: 'home',
    link: '/'
  },
  {
    title: 'about',
    link: '/about'
  },
  {
    title: 'service',
    link: '/service',
  },
  {
    title: 'gallery',
    link: '/gallery'
  },
  {
    title: 'contact',
    link: '/contact'
  },
]

function App() {
  const location = useLocation();
  const show = location.pathname === '/login'
  const [select, setSelect] = useState('All');

  return (
    <Context.Provider value={{ select, setSelect, menus }}>
      {!show && <Navbar />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
      {!show && <Footer />}
      {!show && <KeyboardArrowUpIcon sx={{ position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer', bgcolor: '#133250', color: '#fff', padding: '5px', borderRadius: '10px', fontSize: '50px' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />}
    </Context.Provider>
  );
}

export default App;
