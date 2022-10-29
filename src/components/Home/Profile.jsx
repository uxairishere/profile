import React from "react";
import profile from "../images/profile.jpg"
import bgIntro from "../images/bgIntro.jpg"
import { TypeAnimation } from 'react-type-animation';
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import ToolsTech from "./ToolsTech";
import Contact from "./Contact";
import Particle from "../elements/Particle";
import Navi from "./Navi";

const Profile = (props) => {

    const modes = props.slidesBg;
    console.log("PROPS FROM PROFILE : " + modes)

    return (
        <div className="main-secion" >
            <Navi />
            <div id="home" className="intro-wrapper" style={{ backgroundImage: `url(${bgIntro})`, marginTop:'3rem' }}>
                <Particle/>
                <div className="title-container">
                    <div className={"title row"}>
                        <div className="intro-desc col-xs-12 col-sm-6 col-md-6 col-lg-7" style={{ zIndex: '2' }}>
                            <span ><h5 className="introh5" style={{ letterSpacing: "0.3rem", lineHeight: '0' }}>WELCOME TO MY WORLD</h5></span>
                            <h1 className="introh1">Hi, I'm Uzair Abbas</h1>
                            {/* <h2 className="introh2" style={{ marginTop: "1rem", lineHeight: "1.5rem", color: 'gold'}}>Software Engineer</h2> */}
                            <TypeAnimation

                                sequence={[
                                    'Software Engineer', // Types 'One'
                                    2000, // Waits 2s
                                    'Web Developer', // Deletes 'One' and types 'Two'
                                    2000, // Waits 2s
                                    'Freelancer',
                                    2000, // Waits 2s
                                    'Blogger',
                                    2000,
                                ]}
                                wrapper="h2"
                                cursor={true}
                                repeat={Infinity}
                                style={{ marginTop: "1rem", lineHeight: "1.5rem", color: 'gold' }}
                            />
                            <hr className="introhr hr-title breaker" />
                            <h3 className="introh3" style={{ lineHeight: "1.5rem" }}>I build value through code</h3>
                            <p className="title-p introp">Rawalpindi, Pakistan</p>
                            <a className="introIcon social-media ig btn" href="https://www.instagram.com/uxair_abbass/?hl=en" target="blank"><i className="fab fa-instagram"></i></a>
                            <a className="introIcon social-media li btn" href="https://www.linkedin.com/in/uzair-abbas-7bb474248/" target="blank"><i className="fab fa-linkedin-in"></i></a>
                            <a className="introIcon social-media fb btn" href="https://www.facebook.com/uxairabbass" target="blank"><i className="fab fa-facebook"></i></a>
                            <a className="introIcon social-media gi btn" href="https://github.com/uxairishere" target="blank"><i className="fab fa-github"></i></a>
                        </div>
                        <div className="profile-image-main col-xs-12 col-sm-6 col-md-6 col-lg-5 ">
                            <div className="profile-image-inner">
                                <img className="profile-image glow" src={profile} alt="profile loading" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <About />
            <Services />
            <Projects />
            <ToolsTech/>
            <Contact />
        </div>

    )
}

export default Profile;