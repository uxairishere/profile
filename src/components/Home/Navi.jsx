import React from "react";
import logo from "../images/logo.png"


const Navi = () => {
  function HandleScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("navigation").classList.add('fixed-top')
      document.getElementById("navigation").style.backgroundColor = 'rgba(25,25,25, 0.8)'
    } else {
      document.getElementById("navigation").classList.remove('fixed-top')
      document.getElementById("navigation").style.backgroundColor = '#191919';
    }
  }

  window.onscroll = function() {HandleScroll()};

    return (
        <nav id="navigation" style={{zIndex: '3', backgroundColor: '#191919', transition: 'all 1s'}} className="navbar navbar-expand-lg navbar-dark text-white">
          <div className="container-fluid container">
            <a className="navbar-brand" href="/"><img src={logo} alt="loading logo..." width="50"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-md-auto gap-2 text-center">
                <li className="nav-item rounded">
                  <a className="nav-link" aria-current="page" href="#home">
                  <i className='fa fa-home' style={{fontSize: '1.3rem'}}></i></a>
                </li>
                <li className="nav-item rounded">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item rounded">
                  <a className="nav-link" href="#services"><i className="bi bi-telephone-fill me-2"></i>Services</a>
                </li>
                <li className="nav-item rounded">
                  <a className="nav-link" href="#projects"><i className="bi bi-telephone-fill me-2"></i>Portfolio</a>
                </li>
                <li className="nav-item rounded">
                  <a className="nav-link" href="#contact"><i className="bi bi-telephone-fill me-2"></i>Contact</a>
                </li>
                <ul className='navbar-nav'>
                
                </ul>
              </ul>
            </div>
          </div>
        
        </nav>
    )
}

export default Navi;