import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Redirect,
  Link
} from "react-router-dom"
import About from './Components/About/About';
import Clients from './Components/Clients/Clients';
import Services from './Components/Services/Services';
import Careers from './Components/Careers/Careers';
import ContactUs from './Components/ContactUs/ContactUs';
import WithUs from './Components/WithUs/WithUs';



function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />
    {/* <Home/> */}
    <Routes>
    
      <Route path="/" exact element={<Home />}></Route>
      {/* <Route path="about" exact element={<About/>}></Route> */}
       {/* <Route path="clients" element={<Clients/>}></Route> */}
      </Routes>
      
      <About />
      {/* <Clients/> */}
      <Services />
      <Careers />
      <WithUs />
      <ContactUs />
     
    </div>
    
    </Router>
  );
}

export default App;

// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Redirect,
//   Link
// } from "react-router-dom";
  
// // import Home component
// import Home from ".Components/Home/Home";
// // import About component
// // import About from "./components/About";
// // import ContactUs component
// // import ContactUs from "./components/ContactUs";
  
// function App() {
//   return (
//     <div>
     
//       {/* This is the alias of BrowserRouter i.e. Router */}
//       <Router>
//       <Home />
//        <Routes>
          
//           {/* <Route exact path="/" element={<Home/>} /> */}
//           <Route path="/" exact element={<Home />}></Route>
            
          
//           {/* <Route path="about" element={<About/>} /> */}
            
         
//           {/* <Route path="/contactus" component={ContactUs} /> */}
            
//           {/* If any route mismatches the upper 
//           route endpoints then, redirect triggers 
//           and redirects app to home component with to="/" */}
//           {/* <Redirect to="/" /> */}
//           </Routes>
//       </Router>
//     </div>
//   );
// }
  
// export default App;