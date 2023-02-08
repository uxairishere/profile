import React from "react";
import aboutVid from "../images/aboutVid.mp4"
import AOS from 'aos';
import 'aos/dist/aos.css';
import bloganimation from '../images/blobpurple.svg'
import '../../styles/blobanimate.css'

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

    const education = [
        {
            heading: "BS In Software Engineering - NUML, Islamabad",
            desc: "2019-2023",
            img: require('../images/numllogo.png')
        },
        {
            heading: "Programming Senior category - Academics",
            desc: "Winner of Senior programming competition held in National University of Modern Languages",
            img: require('../images/numllogo.png')

        },
        {
            heading: "Automating Real-World Tasks with Python",
            desc: "Nov 2022",
            img: require('../images/googlelogo.jpg')

        },
        {
            heading: "Open house prize winner - Academics",
            desc: "NUML final year project 'INTELLEGENT IDE' open house prize winner.",
            img: require('../images/numllogo.png')

        },

    ]
    return (
        <div id="about" className="about-main">

            <div className="about-container row" >
                <div className="col-md-3">
                    <video className="aboutVid" style={{ borderRadius: '50%' }} width="200" src={aboutVid} autoPlay muted loop />
                </div>
                <div data-aos="fade-up" className="col-md-9 about-desc">
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

                    {
                        education.map((data, key) => (
                            <div key={key} className="edu row">
                                <div className="col-md-1">
                                    <img className="edu-logo" width={60} src={data.img} alt="logo here" />
                                </div>
                                <div className="col-md-11 edu-col">
                                    <a href="https://www.numl.edu.pk/" className="about-buttons">{data.heading}</a>
                                    <p className="about-desc desc-p">{data.desc}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                {/* BLOG  */}

            </div>
            <div className="blob-container ">
                <img className="blog-img" src={bloganimation} />
            </div>
        </div>
    )
}

export default About;