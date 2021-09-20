import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AboutUs from '../Pages/About Us/Components/AboutUs';
import AddCity from '../Pages/Cities/Components/AddCity';
import Cities from '../Pages/Cities/Components/Cities';
import ContactUs from '../Pages/Contact Us/Components/ContactUs';

import Home from '../Pages/Home/Components/Home';
import Navbar from '../Support/Navbar';

function Start(props) {

    return (
        <Router>
          <Navbar/>
          <Switch>

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/addNewCity">
              <AddCity />
            </Route>
            <Route path="/cities">
              <Cities />
            </Route>
            <Route path="/aboutUs">
              <AboutUs />
            </Route>
            <Route path="/contactUS">
              <ContactUs />
            </Route>
          </Switch>
      </Router>
    );
}

export default Start;