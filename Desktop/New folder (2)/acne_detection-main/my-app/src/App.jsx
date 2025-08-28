import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./firebase/auth";
import Navbar from "./component/pages/Navbar";
import SkinAnalysis from "./component/pages/SkinAnalysis";
import Home from "./component/pages/Home";
import Remedies from "./component/pages/Remedies";
import DietPlan from "./component/pages/DietPlan";
import Footer from "./component/pages/Footer";
import Dermatologist from "./component/pages/Dermatologist";
import Profile from "./component/pages/Profile";
import Login from "./component/pages/Login";
import Signup from "./component/pages/Signup";
import ForgetPassword from "./component/pages/ForgetPassword";
import CreateNewPassword from "./component/pages/CreateNewPassword";
import ChatBot from "./component/pages/ChatBot";
import Analysis from "./component/pages/Analysis";
import MyReports from "./component/pages/MyReports";
import ImageView from "./component/pages/ImageView";
import AboutUs from "./component/pages/AboutUs"; 




function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skin-analysis" element={<SkinAnalysis />} />
          <Route path="/remedies" element={<Remedies />} />
          <Route path="/diet-plan" element={<DietPlan />} />
          <Route path="/dermatologists" element={<Dermatologist />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/my-reports" element={<MyReports />} />
          <Route path="/image-view/:id" element={<ImageView />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
