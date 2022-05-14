import React from 'react';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';

function Project(props) {
    return (

    
    //   <Col md="4">
        <Card className='cards'>
            <Card.Img variant="top" className='projectPic' src={props.projectArr.img}  />

            <Card.Body className='cards'>
                <Card.Title><h3>{props.projectArr.name}</h3></Card.Title>

                <Card.Text>
                    <caption>{props.projectArr.tech}</caption>

                    <div className='github-link'>
                        <a href={props.projectArr.github}>Github</a>
                    </div>

                    <div className='app-link'>
                        <a href={props.projectArr.link}>Link to app</a>
                    </div>
                </Card.Text>

            </Card.Body>
        </Card>
    //   </Col>
    
        
        

    );
}

export default Project;