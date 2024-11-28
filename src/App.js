import Navbar from "./components/Navbar";
import Home from "./Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="content">
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
