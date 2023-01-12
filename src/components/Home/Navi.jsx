import React from "react";
import logo from "../images/logo.png"
import { HashLink as Link } from 'react-router-hash-link';

const Navi = () => {
  function HandleScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      // document.getElementById("navigation").classList.add('fixed-top')
      document.getElementById("navigation").style.backgroundColor = 'rgba(25,25,25, 0.8)'
    } else {
      // document.getElementById("navigation").classList.remove('fixed-top')
      document.getElementById("navigation").style.backgroundColor = '#191919';
    }
  }

  window.onscroll = function() {HandleScroll()};

    return (
        <nav id="navigation" style={{zIndex: '3', backgroundColor: '#191919', transition: 'all 1s'}} className="navbar navbar-expand-lg navbar-dark fixed-top text-white">
          <div className="container-fluid container">
            <a className="navbar-brand" href="/"><img src={logo} alt="loading logo..." width="50"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-md-auto gap-2 text-center">
                <li className="nav-item rounded">
                  <Link className="nav-link" aria-current="page" to="#home">
                  <i className='fa fa-home' style={{fontSize: '1.3rem'}}></i></Link>
                </li>
                <li className="nav-item rounded">
                  <a className="nav-link" href="/profile/#/projects"><i style={{fontSize: '1.3rem'}} class="bi bi-view-list"></i></a>
                </li>
                <li className="nav-item rounded">
                  <Link className="nav-link" to="#about">About</Link>
                </li>
                <li className="nav-item rounded">
                  <Link className="nav-link" to="#services">Services</Link>
                </li>
                <li className="nav-item rounded">
                  <Link className="nav-link" to="#projects">Portfolio</Link>
                </li>
                <li className="nav-item rounded">
                  <Link className="nav-link" to="#contact">Contact</Link>
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