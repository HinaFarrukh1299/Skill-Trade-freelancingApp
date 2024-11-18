import React from 'react';
import "./GigCard.scss";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom


const GigCard = ({item}) => {
    return (
        <Link to='/gig/123' className='link'>
        <div className="gigCard"> 
        <img src="../img/Gig-pp.png" alt="" />
        <div className="info">
            <div className="user">
                <img src={item.pp} alt="" />
                <span>{item.userName}</span>
            </div>
            <p>{item.desc}</p>
            <div className='star'>
                <img src='../img/star.png' alt='' />
                <span>{item.star}</span>
            </div>
            <hr/>
            <div className="details">
                <img src='../img/heart.png' alt='' />
                <div className="price">

                
                <span>STARTING AT</span>
                <h2>${item.price}</h2>

                </div>
            </div>

        </div>
        <div className="details"></div> </div>
        </Link>
    )
}

export default GigCard ;