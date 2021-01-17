import React from 'react'
import {Link} from "react-router-dom"
 
function Header() {
    return (
       <>
         <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <h1 className="logo mr-auto"><Link to="/">Mentor</Link></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li><Link to="/course">Courses</Link></li>
          <li><Link to="/trainer">Trainers</Link></li>
          <li><Link to="/event">Events</Link></li>
          <li><Link to="/pricing" >Pricing</Link></li>
          <li className="drop-down"><a href>Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="drop-down"><a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                 
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
            
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>{/* .nav-menu */}
      <Link to="/course" className="get-started-btn">Get Started</Link>
    </div>
  </header>{/* End Header */}


       </>
    )
}

export default Header
