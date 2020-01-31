import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import EventGallery from "./Component/EventGallery";
import Home from "./Component/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/EventGallery" component={EventGallery}/>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
