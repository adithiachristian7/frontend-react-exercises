import "./assets/style.css";
import Header from "./components/Header";
import Hero from "./components/Hero/";
import Clients from "./components/Clients/";
import Feature from "./components/Feature/";
import Pricing from "./components/Pricing/";
import Footer from "./components/Footer/";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Clients />
        <Feature />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
