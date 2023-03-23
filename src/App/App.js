import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx";
import Bio from "../components/Bio/Bio.jsx";
import Profile from "../components/Profile/Profile.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Contact from "../components/Contact/Contact.jsx";

function App() {
  return (
    <Router>
      <Header>
      </Header>
      <Bio></Bio>
      <Profile></Profile>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </Router>

  );
}

export default App;
