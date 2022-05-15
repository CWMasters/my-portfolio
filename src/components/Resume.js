import React from 'react';


function Resume() {
    return (

        
        <section>
            <h2 className='res-header'>Resume</h2>
            
            <p className='res-link'>To download a copy of my resume, click this <a className='dl-link' href='/images/chris-resume.pdf'>Link.</a></p>
            {/* <a href='../../public/images/chris-reusme.pdf'>CLick</a> */}

             <div>
                <h3 className='res-subhead'>Full Stack Skills</h3>
                <ul className='res-list'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Handlebars</li>
                    <li>PWA</li>
                    <li>SQL</li>
                    <li>Sequelize</li>
                    <li>JQuery</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>API's</li> 
                </ul>
             </div>

        </section>
    )
};


export default Resume;