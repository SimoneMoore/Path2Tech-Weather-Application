import React from 'react';
import { useParams } from 'react-router-dom'; 
// --connects the parameter set

const About = () => {
    const { id } = useParams(); 
    // --connects the parameter set
  return (
    // <div></div>
    <div>{id}</div> 
    // --connects to parameter set
  )
}

export default About