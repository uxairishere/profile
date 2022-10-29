import React from "react";
import aboutVid from "../images/aboutVid.mp4"

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    AOS.init();
    function HandleSkills() {
        document.getElementById('main-skills').classList.remove('d-none');
        document.getElementById('btnskill').classList.add('text-warning');
        document.getElementById('btnedu').classList.remove('text-warning');
        document.getElementById('education').classList.add('d-none');
    }
    function HandleEducation() {
        document.getElementById('main-skills').classList.add('d-none');
        document.getElementById('btnskill').classList.remove('text-warning');
        document.getElementById('education').classList.remove('d-none');
        document.getElementById('btnedu').classList.add('text-warning');
    }
    return (
        <div  id="about" className="about-main">

            <div className="about-container row" >
                <div className="col-md-3">
                    <video className="aboutVid" style={{ borderRadius: '50%' }} width="200" src={aboutVid} autoPlay muted loop />
                </div>
                <div data-aos="fade-up" className="col-md-9">
                    <h1 >About me</h1>
                    <p className="desc-p">I'm quietly confident, self-motivated and hardworking
                        seeking for an opportunity to work
                        in a challenging environment to
                        prove my skills and utilize my
                        knowledge. And most important I love to create new things.</p   >
                </div>

                {/* buttons  */}
                <div className="aboutToggleDiv" style={{ display: 'inline-block', marginTop: '2rem' }}>
                    <a id="btnskill" onClick={HandleSkills} className="about-buttons text-warning" style={{ marginRight: '2rem' }}>Main skills</a>
                    <a id="btnedu" onClick={HandleEducation} className="about-buttons">Education & Certification</a>
                    <hr style={{ backgroundColor: 'gold' }} />
                </div>
                <div id="main-skills">
                    <a href="https://github.com/uxairishere" className="about-buttons">Web Development - Development</a>
                    <p className="about-desc desc-p">Build websites and web apps using javaScript and it's modern frameworks</p>
                    <a href="https://github.com/uxairishere" className="about-buttons">Android Development - Development</a>
                    <p href="https://github.com/uxairishere" className="about-desc desc-p">Build android apps using android studio and it's frameworks like react-native</p>
                    <a href="https://github.com/uxairishere" className="about-buttons">Software Engineering - Engineering</a>
                    <p className="about-desc desc-p">Problem solving, design, development and maintenance of software</p>
                </div>
                <div id="education" className="d-none">
                    <a href="https://www.numl.edu.pk/" className="about-buttons">BS In Software Engineering - NUML, Islamabad</a>
                    <p className="about-desc desc-p">2019-2023</p>
                    <a href="https://www.numl.edu.pk/" className="about-buttons">Programming Senior category - Academics</a>
                    <p className="about-desc desc-p">Winner of Senior programming competition held in National University of
                        Modern Languages.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About;