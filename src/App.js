import React from "react";
import "./App.css";
import Footer from "./Component/Footer";
import EventGallery from "./Component/EventGallery";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CreateEvent from "./Component/CreateEvent";
import Home from "./Component/Home";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/CreateEvent">Create Event</Link>
        <Link to="/EventGallery">All Events</Link>
      </header>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/CreateEvent" component={CreateEvent} />
        <Route exact path="/EventGallery" component={EventGallery}/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
