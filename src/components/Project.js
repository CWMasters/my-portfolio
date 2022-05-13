import React from 'react';
import Card from 'react-bootstrap/Card';

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

            <img src={props.projectArr.img} alt="project pic"></img>
        </div>

    );
}






export default Project;