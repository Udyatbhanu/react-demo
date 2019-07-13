import React from "react";
import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";

import { Header, Body, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header name="Sunil" bgColor="blue" />
      <Body />
      <Footer />
    </React.Fragment>
  );
}

export default App;
