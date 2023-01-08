import React from 'react'
import bg from '../images/pbg.jpg'
import { useParams, useNavigate } from 'react-router-dom';
const ProjectDetail = (props) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    let { id } = useParams();
    return (
        <div>
            <img src={bg} alt="bg" className='project-bg-img' />

            <div className='fixed-top' style={{ margin: '2rem 0 0 2rem' }}>
                <button onClick={goBack} className='btn btn-info back-button'><i className='fa fa-arrow-left'></i></button>
            </div>
            {
                props.projects.map((val, index) => (
                    val._id == id ?
                        <div className='row project-container' key={index}>
                            <div className='col-md-6 project-cover-container'>
                                <img className='project-cover' src={val.img} alt="Loading img..." />
                            </div>
                            <div className='col-md-6 project-details-container'>
                                <h1 className='project-h1'>{val.heading}</h1>
                                <p className='project-p'>{val.desc}</p>
                                <h3>Framework & Tech</h3>
                                <p className='project-p'>{val.tech}</p>
                                <h3>Repository</h3>
                                <a className='btn btn-outline-info' href={val.links.github}>Github <i className='fa fa-github'></i></a>
                            </div>
                            <div>
                                {
                                    val.album.map((val1, idx) => (
                                        <img key={idx} className='project-album-img' src={val1.img} alt="Loading img..." />
                                    ))
                                }
                            </div>
                        </div>
                        : null
                ))
            }
        </div>
    )
}

export default ProjectDetail