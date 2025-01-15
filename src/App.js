import Navbar from "./components/Common/Navbar";
import Home from "./pages/PortifolioPages/Home";
import Footer from "./components/Common/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/PortifolioPages/About";
import Services from "./pages/PortifolioPages/Services";
import Works from "./pages/PortifolioPages/Works";
import Contacts from "./pages/PortifolioPages/Contacts";
import Testimonies from "./pages/PortifolioPages/Testimonies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Testimonies" element={<Testimonies />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
