import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/pages/Navbar";
import AcneAnalysis from "./component/pages/AcneAnalysis";
import Home from "./component/pages/Home";
import Remedies from "./component/pages/Remedies";
import DietPlan from "./component/pages/DietPlan";
import Footer from "./component/pages/Footer"
import Dermatologist from "./component/pages/Dermatologist";
import Login from "./component/pages/Login";
import Signup from "./component/pages/Signup";

function App() {
  return (
    <Router>  
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/acne-analysis" element={<AcneAnalysis />} />  
        <Route path="/remedies" element={<Remedies/>} />  
        <Route path="/diet-plan" element={<DietPlan/>} /> 
        <Route path="/dermatologists" element={<Dermatologist/>} />  
        <Route path="/LogIn" element={<Login/>} />  
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}


export default App;
