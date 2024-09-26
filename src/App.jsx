// import React from 'react'

// import Dropdowns from "./components/header/Dropdowns";

import Header from "./components/header/Header";
import Stories from "./components/Stories/Stories";

import Footer from "./components/footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
const App = () => {
  return (
    <div>
      <ScrollToTop
        smooth={true}
        top="20"
        color="black"
        height="20"
        width="20"
        style={{
          borderRadius: "90px",
          backgroundColor: "#FABC2C",
          display: "flex",
          justifyContent: "center",
          fontWeight: "700",
          alignItems: "center",
        }}
      />
      <Header />
      <Stories />

      <Main />
      <Footer />
    </div>
  );
};

export default App;
