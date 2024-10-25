// src/App.jsx
import React from "react";
import GlobalStyles from "./styles/globalStyles"; // Adjust the path as needed
import Header from "./components/Header";
import MainContent from './components/mainContent';
import Footer from "./components/Footer";

const Agni = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;
