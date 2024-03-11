import './App.css';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import { HashRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/CV/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import './Pages/CV/HomeStyle.css'

function App() {
  return (
    <HashRouter>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </HashRouter>
  );
}

export default App;
