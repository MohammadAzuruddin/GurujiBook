import Nav from "./components/layout/Nav";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

const App = () => {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <section id="home" className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section id="about Us" className="xl:padding-l wide:padding-r padding-b">
        <About />
      </section>
      <section id="Services" className="xl:padding-l wide:padding-r padding-b">
        <Services />
      </section>
      <Footer />
    </main>
  );
};

export default App;
