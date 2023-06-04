import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
// import Footer from "./Components/Footer.jsx";
import Footer from "./Components/Footer.jsx";

import "./styles/Header.scss";
import "./styles/App.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import Contact from "./Components/Contact.jsx";
import "./styles/social.scss";
import Social from "./Components/Social.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Social />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
