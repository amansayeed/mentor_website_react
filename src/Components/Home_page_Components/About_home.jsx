import React from 'react'

function About_home() {
    return (
        <>

<section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <p>About Us</p>
        </div>
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
            <img src="assets/img/about.jpg" className="img-fluid" alt />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="icofont-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            </p>
            <a href="about.html" className="learn-more-btn">Learn More</a>
          </div>
        </div>
      </div>
    </section>{/* End About Section */}
        </>

    )
}

export default About_home
