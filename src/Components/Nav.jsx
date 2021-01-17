import React from 'react'
import { BrowserRouter as Router ,Link,Switch,Route } from "react-router-dom";
import Home from "../Pages/Home_page"
import About from "../Pages/About_page"
import Header from "./Header"
import Trainer from "../Pages/Trainer_page"
import Crouse from "../Pages/Coures_page"
import Event from "../Pages/events_pages"
import Pricing from "../Pages/pricing_page"
import Contact from "../Pages/Contact_page"


function Nav() {
    return (
      <>
<Router>
<Header/>
      <Switch>


        <Route exact path="/" component={Home}>
          <Home/>
        </Route>
        <Route exact path="/about" component={About}>
          <About/>
        </Route>
        <Route exact path="/trainer" component={Trainer}>
          <Trainer/>
        </Route>

        <Route exact path="/event" component={Event}>
          <Event/>
        </Route>

        <Route exact path="/pricing" component={Pricing}>
          <Pricing/>
        </Route>

        <Route exact path="/course" component={Crouse}>
          <Crouse/>
        </Route>
        <Route exact path="/contact" component={Contact}>
          <Contact/>
        </Route>
        

          
           
        
      </Switch>


      </Router>
      </>
    )
}

export default Nav
