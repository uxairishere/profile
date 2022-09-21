import React from 'react'
import onlineStoree from "../images/onlineStoree.png"
import androidProject1 from "../images/androidProject1.png"
import reactGallery1 from "../images/reactGallery1.png"



function Projects() {
    return (
        <div id='projects' className='contact-main'>
            <div className='project-container'>
                <h1>My Latest Projects</h1>
                <p>Here are a few projects I have worked on recently</p>
                <div className='row'>
                    {/* p1 */}
                    <div className='col-md-4'>
                        <card className='service-card project-card card' style={{ backgroundImage: `url(${onlineStoree})`}}>
                            <div className='project-card-inner'>
                                <p className='service-p'>MERN Stack</p>
                                <h3 className='serviceh3'>Ecommerce Store</h3>
                                <button className='btn btn-outline-warning submit-button'>VIEW DETAILS</button>
                            </div>
                        </card>
                    </div>
                    {/* p1 */}
                    <div className='col-md-4'>
                        <card className='service-card project-card card' style={{ backgroundImage: `url(${androidProject1})`}}>
                            <div className='project-card-inner'>
                                <p className='service-p'>Anroid Application</p>
                                <h3 className='serviceh3'>Movie Search Engine</h3>
                                <button className='btn btn-outline-warning submit-button'>VIEW DETAILS</button>
                            </div>
                        </card>
                    </div>
                    {/* p1 */}
                    <div className='col-md-4'>
                        <card className='service-card project-card card' style={{ backgroundImage: `url(${reactGallery1})`}}>
                            <div className='project-card-inner'>
                                <p className='service-p'>React | Firebase | Tailwind</p>
                                <h3 className='serviceh3'>Gallery</h3>
                                <button className='btn btn-outline-warning submit-button'>VIEW DETAILS</button>
                            </div>
                        </card>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Projects