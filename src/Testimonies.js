import Carousels from "./Carousels";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Testimonies = () => {
  return (
    <section>
      <nav>
        <Navbar />
      </nav>

      <main className="mt-24">
        <Carousels />
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default Testimonies;
