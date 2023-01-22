import React from 'react'

const Footer = () => {
    return (
        <div className='footer-container text-center'>
            <div className='footer-top'>
                <h1 className="animate-gradient-text">Uzair Abbas</h1>
                <div className='footer-links-container'>
                <a href='#home' className='footer-links'>HOME</a>
                <a href='#about' className='footer-links'>ABOUT</a>
                <a href='#services' className='footer-links'>SERVICES</a>
                <a href='#projects' className='footer-links'>PORTFOLIO</a>
                <a href='#contact' className='footer-links'>CONTACT</a>
                </div>

                <br />
                <a className="introIcon social-media ig btn" href="https://www.instagram.com/uxair_abbass/?hl=en" target="blank"><i className="fab fa-instagram"></i></a>
                <a className="introIcon social-media li btn" href="https://www.linkedin.com/in/uzair-abbas-7bb474248/" target="blank"><i className="fab fa-linkedin-in"></i></a>
                <a className="introIcon social-media fb btn" href="mailto: uxair.abs@gmail.com" target="blank"><i className="fab fa-google"></i></a>
                <a className="introIcon social-media gi btn" href="https://github.com/uxairishere" target="blank"><i className="fab fa-github"></i></a>
            </div>
            <div className='footer-bottom'>
                <p>This profile is made using React, Python and Bootstrap with <i className='fa fa-heart text-danger'></i> by Uzair Abbas</p>
            </div>

        </div>
    )
}

export default Footer