import React from 'react';
import {Card} from 'react-bootstrap';

function Project(props) {
    return (
        
        <div className='container1'>
            <h3>{props.projectArr.name}</h3>


            <caption>{props.projectArr.tech}</caption>

            <div className='github-link'>
                <a href={props.projectArr.github}>Github</a>
            </div>

            <div className='app-link'>
                <a href={props.projectArr.link}>Link to app</a>
            </div>

            <img className='projectPic' src={props.projectArr.img} alt="project pic"></img>
            
        </div>

    );
}

export default Project;