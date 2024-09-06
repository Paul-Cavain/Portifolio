import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Testimonies  = () => {
    return(
        <section>
            <nav>
                <Navbar />
            </nav>

            <main className="mt-24">
                <span>Testimonies</span>
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
}

export default Testimonies;