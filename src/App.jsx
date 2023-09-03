import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Debangan Paul Chowdhury",
  title: "Web Developer , Designer & Programmer",
  email: "pauldebangan2004@gmail.com",
  gitHub: "pauldebangan1970",
  instagram: "debangan202Ok",
  linkedIn: "debangan-paul-chowdhury",
  medium: "",
  twitter: "debangan202Ok",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
