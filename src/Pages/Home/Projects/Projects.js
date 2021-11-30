import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import img1 from '../../../Images/projects/car-sales.png'
import img2 from '../../../Images/projects/tourism.png'
import img3 from '../../../Images/projects/doctors-services.png'

const projectsData = [
    {
        id: 1,
        name: 'Car Sales House Website',
        img: img1,
        description: 'Single page web application with the dashboard. A customer can order and review for service. An admin can see orders, add a new service,  from the dashboard.',
        github: 'https://github.com/prottay190/car-sales-website-client',
        website: 'https://car-sales-website.web.app/'

    },
    {
        id: 2,
        name: 'Tourism Website',
        img: img2,
        description: 'Single page web application. A customer can order and review for service. LogIn Customer can see orders, add Service, contact us.',
        github: 'https://github.com/prottay190/tourism-website-client',
        website: 'https://tourism-website-ab239.web.app/'

    },
    {
        id: 3,
        name: 'AR Health Care website',
        img: img3,
        description: 'A static healthcare website with responsive layouts for every kind of device. The banner section builds with a carousel slider.',
        github: 'https://github.com/prottay190/car-sales-website-client',
        website: 'https://ar-healthcare-website.web.app/'

    }

]
const Projects = () => {
    return (
        <div id="projects" className="Projects container py-3">
            <div>
                <div className="header text-center">
                    <h2 style={{color: '#4863A0'}}>MY PROJECTS</h2>
                </div>
                <div className="wrapper">
                    <div className="divider div-transparent div-dot"></div>
                </div>
            </div>

            <div className="row">
                {
                    projectsData.map(project =>
                        <div className="col-lg-4 col-md-6">
                            <div className="card mt-4">
                                <img className="card-img-top" src={project.img} alt="" />
                                <div className="card-body text-decoration-none">
                                    <h4 className="card-title">{project.name}</h4>
                                    <p className="card-text">{project.description}</p>
                                    <div className="technology mb-2"><span>React</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span>  <span>Firebase</span> <span>Heroku</span></div>

                                    <a href={project.github} target="_blank" >
                                        <button type="button" className="btn btn-secondary btn-block p-button">
                                            <FaGithub className="icon" />
                                   GitHub Link</button>
                                    </a>

                                    <a href={project.website} target="_blank">
                                        <button type="button" className="btn btn-primary btn-block p-button">
                                           <FaExternalLinkAlt className="icon" />
                                    Live site</button>
                                    </a>                                   
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;