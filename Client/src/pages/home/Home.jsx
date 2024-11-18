import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from '../../data';
import CatCard from '../../components/catCard/CatCard';
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
    return (
        <div className="home">
             <hr />
            <Featured />
           
            {/* Pass the mapped cards as children to Slide */}
            <Slide slidesToShow={5} arrowScroll={5}>
                {cards.map(card => (
                    <CatCard key={card.id} item={card} />
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1> Your GoTo Place For All The Freelancing Services</h1>
                        <div className="title">
                            <img src='./img/check.png' alt='' />
                            Quality You Can Trust
                        </div>
                        <p> Find highest quality services and premium talent.
                            Hourly Rates or Project Pricing , You Decide </p>
                            <div className="title">
                            <img src='./img/check.png' alt='' />

                                Top Talent at Your Fingertips
                        </div>
                            <p>Find the right talent that meets your unique project
                            needs—quickly and effortlessly." </p>
                            <div className="title">
                            <img src='./img/check.png' alt='' />
                            Quality You Can Trust, You Decide
                        </div>
                            <p> Work with verified freelancers known for delivering outstanding results </p>
                            <div className="title">
                            <img src='./img/check.png' alt='' />
                            Seamless Collaboration
                        </div>
                            <p> Stay on track and collaborate easily with freelancers from anywhere in the world, all in one place.</p>
                    </div>
                    <div className="item">
                        <video src='./video/Featured-Video.mp4' controls></video>
                    </div>
                </div>
            </div>

            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1> Skill-Trade business </h1>
                        <h1>The most valued seal-deal for individual and teams.</h1>
                        <p>upgrade your digital products twith latest tools,tech stacks , 
                            the most refined user interfaces and
                            much more.
                        </p>
                        <div className="title">
                            <img src='./img/check.png' alt='' />
                            Connect to freelancers with proven business experience.
                        </div>
                        <div className="title">
                            <img src='./img/check.png' alt='' />
                            Get matched with the perfect talent by a customer success manager.
                        </div>
                        <div className="title">
                            <img src='./img/check.png' alt='' />
                           Manage teamWork and boost productivity with  an influential workplace.
                        </div>

                        <button> Explore Skill-Trade Business </button>

                        </div>
                       
                    <div className="item">
                        <img src='./img/Communication3.jpg'
                         alt= '' width={'585px'} />
                    </div>

                </div>
            </div>
            <Slide slidesToShow={4} arrowScroll={4}>
                {projects.map(card => (
                    <ProjectCard key={card.id} item={card} />
                ))}
            </Slide>
        </div>
    );
};

export default Home;

