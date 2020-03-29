import React from 'react';
import { Link } from "react-router-dom";

function About() {
    return <div className="aboutContent">
                <p>This is a map of Concordia University, St. Paul campus</p>
                <img src="./images/map.png" alt="Concordia Map" width="800" height="400" />
            </div>
}

export default About;