/*import React, { Children } from 'react';
import "./Slide.scss";
import Slider from 'infinite-react-carousel';
import CatCard from '../catCard/CatCard';
import { cards } from '../../data';


const Slide = ( {children,slidesToShow ,arrowScroll}) => {
    return (
        <div className="slide"> 
        <div className="container">

       
  <Slider slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
    {/*{(cards.map(card=>(<CatCard item ={card} key ={card.id} />)))}*//*} un-comment the '}' only*/

  /*/   {Children} ////// continued
     
  </Slider>


            </div> 
            </div>
    )
}

export default Slide ; *//// end



/*import React from 'react';
import './Slide.scss';
import Slider from 'infinite-react-carousel';
import CatCard from '../catCard/CatCard';
import { cards } from '../../data';

const Slide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={3} autoplay={true} arrows={true}>
          {cards.map((card) => (
            <CatCard item={card} key={card.id} /> 
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
*/

import React from 'react';
import "./Slide.scss";
import Slider from 'infinite-react-carousel';

const Slide = ({ children, slidesToShow, arrowScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
          {/* Render the children prop here */}
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

