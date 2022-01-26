import React from 'react';

function About() {
    return (
        <section className="container">
            <h2 className='top-title'>About me</h2>
            <hr></hr>
            <div> 
                <center><img className="profile-image mb-5" id='avatar' src='https://avatars.githubusercontent.com/brynne-eastman' alt="brynne eastman"></img> </center>
                <h2 className='name'>Brynne Eastman</h2>
                <br></br>
                <p className='job'>Technical Project Manager</p>
                <br></br>
                <p className='about-me'>
                    Hi👋 I'm Brynne! I am currently a Marketing and Communications Coordinator at an oncology company based in Florida, 
                    but am wanting to change courses to become a Technical Project Manager.  Take a look at my portfolio!
                </p>
            </div>


        </section>
    );
}

export default About;