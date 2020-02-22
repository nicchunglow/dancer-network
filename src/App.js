import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import EventGallery from "./Component/EventGallery";
import Home from "./Component/Home";
import "./App.css";
import EventDetailsPage from "../src/Component/EventDetailsPage";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={EventGallery}/>
        <Route path="/events/:id" component={EventDetailsPage}/>
        {/* <Redirect to="/events"/> */}
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
