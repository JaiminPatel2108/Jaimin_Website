import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Hireme from './components/Hireme';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    {/* <ToastContainer> */}
        <div className='maincom'>
        <Router>
            <Navbar/>
          <Routes>
            <Route path='/' Component={()=> <Home/>}></Route>
            <Route path='/about' Component={()=> <About/>}></Route>
            <Route path='/contact' Component={()=> <Contact/>}></Route>
            <Route path='/hireme' Component={()=> <Hireme/>}></Route>
          </Routes>
          <Footer/>
        </Router>
        </div>
    <ToastContainer theme="dark"/>
    </>

  );
}

export default App;
