import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title } from '../../profile'
import photo from "../../assets/images/daniel.png";

const About = () => {
    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
                <div className="pp-head-line mx-auto text-center">
                    <h1 id="About" className="red-line pp-head">{section2title}</h1>
                </div>
                <p className="lead about-text">
                    {about.paragraph}  
                </p>
            </div>
            <div id="Skills"> 
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) => 
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
                    )}̀
                </div> 
            </div>
        </div>
    )
}

export default About
