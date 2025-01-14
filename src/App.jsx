import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import "flowbite";
import Dashboard from "./components/pages/dashboard";
import SignupDesign from "./components/pages/signupdesign";
import VerifyDesign from "./components/pages/verifydesign";
import KathaMehfilForm from "./components/pages/kathamehfilform";
import SubcriptionDesign from "./components/pages/subriptiondesign";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
