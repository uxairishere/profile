import React from 'react'
import project from '../images/icons/projects.png'
import { useNavigate } from 'react-router-dom';
import bg from '../images/pbg.jpg'
import Footer from './Footer';

const AllProjects = (props) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className='all-projects-container text-white'>
            <img src={bg} alt="bg" className='all-project-bg-img fixed-top' />

            <div className='fixed-top' style={{ margin: '2rem 0 0 2rem' }}>
                <button onClick={goBack} className='btn btn-info back-button'><i className='fa fa-arrow-left'></i></button>
            </div>
            <h1 className='all-projects-h1'><img src={project} alt="loading..." className='all-projects-icon' width='50' /> List of my all projects</h1>
            {
                props.projects.map((val, index) => (
                    <div className='row project-container all-projects-wrapper' key={index}>
                        <div className='col-md-6 project-cover-container'>
                            <img className='project-cover' src={val.img} alt="Loading img..." />
                        </div>
                        <div className='col-md-6 project-details-container all-projects-desc '>
                            <h1 className='project-h1'>{val.heading}</h1>
                            <p className='project-p'>{val.desc}</p>
                            <h3>Framework & Tech</h3>
                            <p className='project-p'>{val.tech}</p>
                            <a className='btn btn-outline-info all-projects-btn' href={val.links.github} style={{ margin: '0 1rem 0 0' }}>Github Repository <i className='fa fa-github'></i></a>
                            <a className='btn btn-outline-info all-projects-btn' href={'/profile/#/project/' + val._id}>More Details <i className='fa fa-arrow-right'></i></a>

                        </div>
                    </div>
                ))
            }
        <Footer/>
        </div>
    )
}

export default AllProjects