import React from 'react';
import projects from '../../porfolio.json';

// individual project cards
function ProjectCards(props) {
    return (
        <div className='card'>
            <div className='img-container'>
                <img alt={props.name} src={props.image} />
            </div>
            <div className='content'>
                <ul>
                    <li>
                       <p className='card-title'>{props.name}</p> 
                    </li>
                    <li>
                        <p className='project-description'>{props.description}</p>
                    </li>
                    <li>
                        {props.languages}
                    </li>
                    <li>
                       <div className='project-icons-container' >
                           <p>
                            <a href={props.github}><img src="https://img.icons8.com/ios/40/000000/github.png" alt="github-icon" id="port-icon"/></a> 
                            <a href={props.deployedApp}><img id='port-icon' src="https://img.icons8.com/fluent/48/000000/domain.png" alt="Live Application" /></a>
                           </p> 
                        </div> 
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}

function Wrapper(props) {
    return <div className='wrapper'>{props.children}</div>
}

function Projects () {
    return (
        <section className='container'>
            <div className='project'>
                <h2 className='top-title'>Portfolio</h2>
                <hr></hr>
            </div>

            <Wrapper id='card-data'>
                {projects.map((project) => (
                    <ProjectCards name={project.name} key={project.id} image={project.image}  github={project.github} deployedApp={project.deployedApp} languages={project.languages} description={project.description} />
                ))}
            </Wrapper>
        </section>
    );
}

export default Projects;