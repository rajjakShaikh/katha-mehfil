import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import "flowbite";
import Dashboard from "./components/pages/dashboard";
import SignupDesign from "./components/pages/signupdesign";
import VerifyDesign from "./components/pages/verifydesign";
import KathaMehfilForm from "./components/pages/kathamehfilform";
import SubcriptionDesign from "./components/pages/subriptiondesign";
import CurrentPlan from "./components/pages/currentplan";
import LoginPage from "./components/pages/loginpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignupDesign />} />
          <Route path="/verify" element={<VerifyDesign />} />
          <Route path="/form" element={<KathaMehfilForm />} />
          <Route path="/plan" element={<SubcriptionDesign />} />
          <Route path="/currentPlan" element={<CurrentPlan />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
