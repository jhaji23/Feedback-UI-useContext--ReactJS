import React from 'react'
import Card from './components/shared/Card'
import {Link} from 'react-router-dom'
import {FaLinkedin , FaGithub} from 'react-icons/fa'

function About() {
  return (
    <div id='main-box'>
        <Card> 
            <div className="box">
            <div >
            <p>Hi, I am Ajay Jha, I am a full-stack developer.</p>
            <p>My key skill sets are Java, Javascript, React , Node.js , MongoDB . </p>
            <div className="atag">
            <a href="https://www.linkedin.com/in/ajay-jha-01/" target="{_blank}" ><FaLinkedin size={60}/></a>
            <a href="https://github.com/jhaji23" target="{_blank}"><FaGithub size={60} color='black'/></a>
            </div>

            <Link to="/"><button className='btnn'> Go Back</button></Link>
            </div>
            {/* <img src={require('./Data/ajay.jpeg')} alt='error loading' className='img' /> */}
            </div>
        </Card>
 

    </div>
  )
}

export default About
