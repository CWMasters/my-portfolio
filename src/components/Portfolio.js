import React from 'react';
import Project from './Project';

function Portfolio() {
    const projectArr = [
       
        {
            name: 'L3tters',
            tech: 'React',
            github: 'https://github.com/Moses-Ian/letters',
            link: 'https://l3tters.herokuapp.com/',
            img: '/images/letters.png'
        },
        {
            name: 'Moveies',
            tech: 'HTML/CSS/JS/Tailwind',
            github: 'https://github.com/CWMasters/moveiesfinal',
            link: 'https://cwmasters.github.io/moveiesfinal/',
            img: '/images/moveies-screenshot.png'
        },
        {
            name: 'Run Buddy',
            tech: 'HTML/CSS',
            github: 'https://github.com/CWMasters/run-buddy',
            link: 'https://cwmasters.github.io/run-buddy/',
            img: '/images/run-buddy-screenshot.png'
        },
        {
            name: 'My Password Generator',
            tech: 'HTML/CSS/JS',
            github: 'https://github.com/CWMasters/my-password-generator',
            link: 'https://cwmasters.github.io/my-password-generator/',
            img: '/images/password.png'
        },
        {
            name: 'Todays Schedule',
            tech: 'HTML/CSS/JS/Bootstrap/JQuery',
            github: 'https://github.com/CWMasters/todays-schedule-app',
            link: 'https://cwmasters.github.io/todays-schedule-app/',
            img: '/images/scheduler.png'
        },
        {
            name: 'Show Me Notes',
            tech: 'HTML/Bootstrap/JS/Express',
            github: 'https://github.com/CWMasters/show-me-notes',
            link: 'https://cwmasters.github.io/show-me-notes/',
            img: '/images/notes.png'
        },
        

    ];

    // cycle through the projectsArr to display
    return (
        <section>
            <div>
                <h2 className='port-header'>Portfolio</h2>
            </div>
            <div className='card-container'>
               
                   { projectArr.map(entry => {
                        return ( 
                            
                                <Project projectArr={entry}></Project>
                        )
                    })    
                }

                
            </div>
           
        </section>


    )

};



export default Portfolio;