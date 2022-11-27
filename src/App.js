import React from "react";
// CSS
import "./styles/App.css";

// Components
import Header from "./components/Header";
import Info from "./components/Info";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
