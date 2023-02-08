import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import bloganimation from '../images/bloblue.svg'
import '../../styles/blobanimate.css'

const Services = () => {
    AOS.init();
    return (
        <div id='services' className='service-main'>
            <div className='service-container container'>
                <h1 className='text-center mb-5'>Services</h1>
                <div className='row'>
                    {/* card 1  */}
                    <div data-aos="fade-up"  className='col-md-4'>
                        <card className='service-card card'>
                        <div className='card-inner'>
                            <i class="fa fa-laptop-code service-icon text-warning"></i>
                            <h3 className='serviceh3'>Custom Web Development</h3>
                            <p className='about-desc about-p service-p'>I love to bring your custom web ideas into reality, it keeps me motivated to bring those ideas to life.</p>
                            <h3 className='serviceh3'>Thing I love doing</h3>
                            <p className='about-desc about-p service-p'>HTML, CSS, JavaScript, Python</p>
                            <h3 className='serviceh3'><i class="bi bi-tools text-success"></i> Tools & Tech</h3>
                            <p className='about-desc about-p service-p'>VSCode | React | Node | Express | Python | MongoDB | Mysql | CSS3</p>
                            </div>
                        
                        </card>
                    </div>
                    {/* card 1  */}
                    <div data-aos="fade-up" className='col-md-4'>
                        <card className='service-card card'>
                        <div className='card-inner'>
                            <i class="fa fa-layer-group service-icon text-warning"></i>
                            <h3 className='serviceh3'>MERN Stack Application</h3>
                            <p className='about-desc about-p service-p'>I Build user-friendly full-stack ecommerce & dynamic websites with quality code and architecture.</p>
                            <h3 className='serviceh3'>Build Approach</h3>
                            <p className='about-desc about-p service-p'>MERN Stack</p>
                            <h3 className='serviceh3'><i class="bi bi-tools text-success"></i> Tools & Tech</h3>
                            <p className='about-desc about-p service-p'>VSCode | React | Node | Express | MongoDB | Redux | Bootstrap</p>
                            </div>
                        
                        </card>
                    </div>{/* card 1  */}
                    <div data-aos="fade-up" className='col-md-4'>
                        <card className='service-card card'>
                        <div className='card-inner'>
                            <i class="fa fa-mobile service-icon text-warning"></i>
                            <h3 className='serviceh3'>Android Application</h3>
                            <p className='about-desc about-p service-p'>I like building quality android application with friendly user-interface and simple desgin</p>
                            <h3 className='serviceh3'>Thing I love doing</h3>
                            <p className='about-desc about-p service-p'>Java, JavaScript, API Integration</p>
                            <h3 className='serviceh3'><i class="bi bi-tools text-success"></i> Tools & Tech</h3>
                            <p className='about-desc about-p service-p'>Android Studio | React Native | Java | JavaScript</p>
                            </div>
                        
                        </card>
                    </div>
                </div>
            </div>
            <div className="blob-container" style={{left: 0}} >
                <img className="blog-img" src={bloganimation}/>
            </div>
        </div>
    )
}

export default Services