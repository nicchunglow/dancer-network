import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import EventGallery from "../src/Container/EventGallery";
import Home from "./Component/Home";
import "./App.css";
import FullEventDetailsPage from "./Component/FullEventDetailsPage";
import CreateEvent from "../src/Component/CreateEvent";
import RegisterUser from "./Component/RegisterUser";
import Login from "./Component/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/users/register" component={RegisterUser} />
        <Route exact path="/events/create" component={CreateEvent} />
        <Route exact path="/events" component={EventGallery} />
        <Route
          exact
          path="/events/published/:id"
          component={FullEventDetailsPage}
        />
        <Route exact path="/users/login" component={Login} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
