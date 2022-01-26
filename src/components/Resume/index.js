import React from 'react';

function Resume() {
    return (
        <section className='container'>
            <h2 className='top-title'>Resume</h2>
            <hr></hr>

            <div>
                <div className='mt-5'>
                    
                    <ul>
                        <li>
                            <strong>Future Technical Project Manager who possesses skills within the MERN stack.</strong>
                        </li>
                        <br></br>
                        <li>
                            Frontend: HTML, CSS, JavaScript, Bootstrap
                        </li>
                        <li>
                            Backend: MySQL, MongoDB, Mongoose, Express, React, Node.js
                        </li>
                    </ul>
                    
                    <a href='https://github.com/brynne-eastman/challenge-react-portfolio/blob/main/assets/Brynne_Eastman-Resume%20(1).pdf'
                    className='link'
                    >
                        Download Resume Here
                    </a>
                    
                </div>
            </div>
        </section>
    );
}

export default Resume;