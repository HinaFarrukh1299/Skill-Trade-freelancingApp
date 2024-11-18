import React from "react";
import "./Gig.scss" ;
import Slider from "infinite-react-carousel/lib/carousel/slider";

const Gig = () => {
    return (
        <div className="gig">
            <div className="container">
            <div className="left">
                <span className="breadCrumbs"> Skill-Trade > GRAPHICS & DESIGN > </span>
                <h1> i will create AI generated ART for you </h1>

                <div className="user">
                    <img src='../img/sky-blue.jpg' alt='' className="pp"/> {/*profile img*/}
                    <span>Hina Farrukh</span>{/*user name*/}
                    <div className="stars">
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <span>5</span>
                    </div>
                </div>
                <Slider slidesToShow={1} arrowsScroll={1}>
                    <img src="../img/AI-Generated-Art.jpg" alt="" className="individual" />
                    <img src="../img/AI.png" alt="" className="individual"  />
                    <img src="../img/ai-shop-0.jpg" alt="" className="individual" />
                </Slider >
                <h2>About this Gig !</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Tenetur ipsum officiis, quibusdam ipsa repellendus exercitationem quas fugiat quod, 
                    odio corporis atque suscipit corrupti quia eveniet.
                     Sint, officiis. Optio, soluta adipisci.</p>
                     <div className="seller">
                        <h2>
                            About The Seller
                        </h2>
                        <div className="user">
                            <img src="../img/gigPP.jpg" alt="My Profile Picture" />
                            <div className="info">
                                <span>
                                    Hina Farrukh
                                </span>
                                <div className="stars">
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <span>5</span>
                    </div>
                    <button> Contact Me </button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                                <div className="item">
                                    <span className="title">
                                        Member Since
                                    </span>
                                    <span className="desc">
                                        2024
                                    </span>
                                </div>

                                <div className="item">
                                    <span className="title">
                                        Languages
                                    </span>
                                    <span className="desc">
                                        English
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        Last delivery
                                    </span>
                                    <span className="desc">
                                        1 Day
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        Located At
                                    </span>
                                    <span className="desc">
                                        Egypt
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        Average ResponseTime
                                    </span>
                                    <span className="desc">
                                        24 Hrs
                                    </span>
                                </div>

                            </div>
                            <hr/>
                            <p></p>
                        </div>
                     </div>
                     <div className="reviews">
                        <h2> Reviews</h2>
                        <div className="item">
                            <div className="user">
                                <img src="../img/random1.jpg" alt="" />
                                <div className="info">
                                    <span>Hina Farrukh</span>
                                    <div className="country">
                                        <img src="../img/Egypt.png" alt="" />
                                        <span>Egypt</span>
                                    </div>

                                </div>
                            </div>
                            <div className="stars">
                            <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <span>5</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Animi delectus, sint libero ratione, 
                                quas, velit est sunt porro nemo incidunt 
                                eveniet neque nostrum inventore 
                                temporibus itaque magni voluptate perferendis impedit.</p>
                                
                                <div className="helpful">
                                    <span>Helpful?</span>
                                    <img src="../img/thumbs-up.png" alt="" />
                                    <span>Yes</span>
                                    <img src="../img/thumbs-down.png" alt="" />
                                    <span>No</span>
                                </div>

                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img src="../img/random1.jpg" alt="" />
                                <div className="info">
                                    <span>Hina Farrukh</span>
                                    <div className="country">
                                        <img src="../img/Egypt.png" alt="" />
                                        <span>Egypt</span>
                                    </div>

                                </div>
                            </div>
                            <div className="stars">
                            <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <span>5</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Animi delectus, sint libero ratione, 
                                quas, velit est sunt porro nemo incidunt 
                                eveniet neque nostrum inventore 
                                temporibus itaque magni voluptate perferendis impedit.</p>
                                
                                <div className="helpful">
                                    <span>Helpful?</span>
                                    <img src="../img/thumbs-up.png" alt="" />
                                    <span>Yes</span>
                                    <img src="../img/thumbs-down.png" alt="" />
                                    <span>No</span>
                                </div>

                        </div>
                        <hr/>
                        <div className="item">
                            <div className="user">
                                <img src="../img/random1.jpg" alt="" />
                                <div className="info">
                                    <span>Hina Farrukh</span>
                                    <div className="country">
                                        <img src="../img/Egypt.png" alt="" />
                                        <span>Egypt</span>
                                    </div>

                                </div>
                            </div>
                            <div className="stars">
                            <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <img src='../img/star.png' alt="" />
                        <span>5</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Animi delectus, sint libero ratione, 
                                quas, velit est sunt porro nemo incidunt 
                                eveniet neque nostrum inventore 
                                temporibus itaque magni voluptate perferendis impedit.</p>
                                
                                <div className="helpful">
                                    <span>Helpful?</span>
                                    <img src="../img/thumbs-up.png" alt="" />
                                    <span>Yes</span>
                                    <img src="../img/thumbs-down.png" alt="" />
                                    <span>No</span>
                                </div>

                        </div>
                     </div>
                </div>
                <div className="right">
                    <div className="price"></div>
                    <h3>This image is generated by Ai</h3>
                    <h3>$59.99</h3>
                    <p>let me what kind of AI generated image can i create for you?</p>
                    <div className="details">
                        <div className="item">
                        <img src="../img/clock.png" alt="" />
                        <span>2 Days Delivery</span>
                        </div>
                        <div className="item">
                        <img src="../img/recycle.png" alt="" />
                        <span>3 Revisions</span>
                        </div>
                    </div>
                    <div className="features">
                        <div className="item">
                            <img src="../img/greenCheck.png" alt="" />
                            <span>Quick Update</span>
                        </div>
                        <div className="item">
                            <img src="../img/greenCheck.png" alt="" />
                            <span>Quick Update</span>
                        </div>
                        <div className="item">
                            <img src="../img/greenCheck.png" alt="" />
                            <span>Quick Update</span>
                        </div>
                        <div className="item">
                            <img src="../img/greenCheck.png" alt="" />
                            <span>Quick Update</span>
                        </div>
                    </div>
                    <button>Continue</button>
                </div>
                </div>
                </div>
    )
}

export default Gig ;