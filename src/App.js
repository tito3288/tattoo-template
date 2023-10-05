import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import Artists from "./pages/Artists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Artists" element={<Artists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
