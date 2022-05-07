import React from "react";
import myPic from "../assets/images/mypic.jpg";

function About() {
    return (
        <section>
          <h1 id="about">About Me</h1>
            <article className="container">
                <img src={myPic} className='myPic' alt="Picture of Chris Masters" />
                
                <p className="myInfo">
                    Born in the UK in 1983 and moved to Arizona in December 2016 to be with my beautiful wife, since then we have 2 boys together. 
                    Back in England I studied and achieved a Bachelor's in Music Design and Technology at the University of Hertfordshire but then found myself working in Retail. 
                    Currently a Supervisor at Best Buy. 
                    My next chapter leaves me studying to become a Full Stack Web Developer, undergoing a part time Bootcamp through UofA and could not be enjoying it more.
                </p>
            </article>
        </section>
    );
}


export default About;