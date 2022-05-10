import React from 'react';
import {Card, Button} from 'react-bootstrap';

function Project(props) {
    return (
        <div>
            <h2>{props.projectArr.name}</h2>
            <caption>{props.projectArr.tech}</caption>
            <div>
            <a href={props.projectArr.github}>Github</a>
            </div>
            <div>
            <a href={props.projectArr.link}>Link</a>
            </div>
            <img src={props.projectArr.image} alt="project pic"></img>
        </div>



    )
};




// template for displaying portfolio

export default Project;