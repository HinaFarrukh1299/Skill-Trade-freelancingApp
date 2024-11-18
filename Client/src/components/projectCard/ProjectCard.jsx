import React from 'react';
import "./ProjectCard.scss";
import Slider from 'infinite-react-carousel';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const ProjectCard = ({item}) => {
    return (
        <Link to='/' className='link'>
        <div className="projectCard">
            <img src={item.img} alt='' />
            <div className="info">
                <img src={item.pp} alt='' />
                <div className="texts">
                    <h2>{item.cat}</h2>
                    <span>{item.userName}</span>
                </div>
            </div>
           
        </div>
        </Link>
    )
}

export default ProjectCard ;