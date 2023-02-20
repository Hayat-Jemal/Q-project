import React from "react";
import ReactDom from "react-dom";
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
// import Clients from './Components/Clients/Clients';
import Services from './Components/Services/Services';
import Careers from './Components/Careers/Careers';
import ContactUs from './Components/ContactUs/ContactUs';
import WithUs from './Components/WithUs/WithUs';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <About />
      {/* <Clients/> */}
      <Services />
      <Careers />
      <WithUs />
      <ContactUs />
    </div>
  );
}

export default App;
