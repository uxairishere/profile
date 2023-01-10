import React, {useState} from 'react'
import { projects } from '../states/project.state';

function Projects() {

    const [load, setLoad] = useState(6);

    const loadHandler = () => {
        if(load > projects.length){
            setLoad(6)
        }else{
        setLoad(load + 3);
        }
    }
    return (
        <div id='projects' className='contact-main'>
            <div className='project-container'>
                <h1>My Latest Projects</h1>
                <p>Here are a few projects I have worked on recently</p>
                <div className='row'>
                    {
                    projects.slice(0,load).map((value,key) => (
                    <div key={key} className='col-md-4'>
                        <card className='service-card project-card card' style={{ backgroundImage: `url(${value.img})`}}>
                            <div className='project-card-inner'>
                                <p className='service-p'>{value.tech}</p>
                                <h3 className='serviceh3'>{value.heading}</h3>
                                <a href={'/profile/#/project/' + value._id} className='btn btn-outline-warning submit-button'>VIEW <i className='fa fa-github'></i></a>
                            </div>
                        </card>
                    </div>
                    ))
                    }

                </div>
                <button onClick={() => {loadHandler()}} className='btn btn-outline-info ' style={{width: "15rem", margin: '0 auto'}}>View more...</button>

            </div>

        </div>
    )
}

export default Projects