import React from "react";
import "./App.css";
import SingleEvent from "./Component/SingleEvent";
import Header from "./Component/Header"
import Footer from "./Component/Footer"
function App() {
  return (
    <div className="App">
      <Header/>
      <SingleEvent/>
      <Footer/>
    </div>
  );
}

export default App;
