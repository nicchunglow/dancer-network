import React from "react";
import "./App.css";
import Header from "./Component/Header"
import Footer from "./Component/Footer"
import EventGallery from "./Component/EventGallery";
function App() {
  return (
    <div className="App">
      <Header/>
      <EventGallery/>
      <Footer/>
    </div>
  );
}

export default App;
