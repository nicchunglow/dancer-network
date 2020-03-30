import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import EventGallery from "../src/Container/EventGallery";
import Home from "./Component/Home";
import "./App.css";
import EventDetailsPage from "./Container/EventDetailsPage";
import CreateEvent from "../src/Component/CreateEvent";
import RegisterFunction from "./Component/RegisterFunction";
import Login from "./Component/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/users/register" component={RegisterFunction} />
        <Route exact path="/events/create" component={CreateEvent} />
        <Route exact path="/events" component={EventGallery} />
        <Route exact path="/events/:id" component={EventDetailsPage} />
        <Route exact path="/users/login" component={Login} />
        <Redirect to="/events"/>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
