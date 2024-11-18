import React from "react";
import "./MyGigs.scss" ;
import { Link } from "react-router-dom";
/*import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";
const MyGigs = () => {
    return (
        <div className="gigs"> 
        <div className="container">
            
                <span className="breadcrumbs">
                    Skill-Trade > Graphics And Design >
                    <h1>AI Artists</h1>
                    <p>Explore the bounderies of Art And Technology with Skill-Trade's AI Artists</p>

                    <div className="menu">
                        <div className="left">
                            <span>Budget</span>
                            <input type="text" placeholder="min" />
                            <input type="text" placeholder="max" />
                            <button>Apply</button>


                        </div>
                        <div className="right">
                            <span className="sortBy">SortBy</span>
                            <span className="sortType">Best Selling</span>
                            <img src="../img/down.png" alt="" />
                            <div className="rightMenu">
                                <span>Newest</span>
                                <span>Best Selling</span>
                            </div>
                        </div>
                    </div>
                </span>
                </div> 
                </div>
    )
}

//export default Gigs ; */
//import React from "react";
//import React, { useState } from "react";
//import "./Gigs.scss";//have to get rid of Gigs page in pages
//import {gigs} from "../../data";
//import GigCard from "../../components/gigCard/GigCard";

/*const Gigs = () => {
    const[sort,setSort] = useState("sales");
    const[open,setOpen] = useState(false);

    //Function RE-Sort
    const reSort =(type) => {

        setSort(type)
        setOpen(false)
    }
    return (
        
        
            <div className="gigs"> 
           <h3> My Gigs </h3>
        
        <div className="container">
            
                <div className="breadcrumbs">
                    Skill-Trade > Graphics And Design >
                    <h1>AI Artists</h1>
                    <p>Explore the bounderies of Art And Technology with Skill-Trade's AI Artists</p>

                    <div className="menu">
                        <div className="left">
                            <span>Budget</span>
                            <input type="text" placeholder="min" />
                            <input type="text" placeholder="max" />
                            <button>Apply</button>


                        </div>
                        <div className="right">
                            <span className="sortBy">SortBy</span>
                            <span className="sortType">{sort=== "sales" ? "Best Selling" : "Newest"}</span>
                            <img src="../img/down.png" alt="" onClick={()=>setOpen(!open)} />
                           {open && ( <div className="rightMenu">
                               {sort==="sales" ? ( <span onClick={ () => reSort('createdAt') }>Newest</span>
                               ):
                                (<span onClick={ () => reSort('sales') }> Best Selling </span>)}
                            </div>
                           )}
                        </div>
                    </div>
                    <div className="cards">

                                {gigs.map(gig=>
                                    (
                                        <GigCard key={gig.id} item={gig}/>
                                    )

                                    
                                )}

                    </div>
                </div>
                </div> 
                </div>

                
    
    )
}

export default Gigs ;

/*import React, { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Liverr > Graphics & Design ></span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                  )}
                  <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs; */

const MyGigs=()=>{
  
    const currentUser = {
      id: 1,
      username: "Hina-Farrukh",
      isSeller: true,
    };
  
    return(
    
      
    <div className="myGigs">
        <div className="container">
      <div className="title">
        <h1> Gigs </h1>
       
       {currentUser.isSeller && (
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          )}
          </div>
      <table>
        <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
        </tr>
        <tr>
            <td><img src="../img/Gig1personal.jpg" alt="" className='image' /></td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src="../img/delete.png" alt="" /></td>
                    </tr>
      </table>
      </div>
    </div>
    )}

export default MyGigs;