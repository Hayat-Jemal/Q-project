import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Clients from './Components/Clients/Clients';
import Services from './Components/Services/Services';
import Careers from './Components/Careers/Careers';
import ContactUs from './Components/ContactUs/ContactUs';
import WithUs from './Components/WithUs/WithUs'
import Login from './Components/Login/Login';



function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
      {/* <NavBar />
      <Home/>
      <About />
      <Clients/>
      <Services />
      <Careers />
      <WithUs />
      <ContactUs /> */}

      
       {/* <Route path="/login" element={<Login/>} /> */}
       <Route path="/" element={<><NavBar />
      <Home/>
      <About />
      <Clients/>
      <Services />
      <Careers />
      <WithUs />
      <ContactUs /></>} />
       </Routes> 
       
      <Login />
     
    </div>
    </Router>
  );
}

export default App;
