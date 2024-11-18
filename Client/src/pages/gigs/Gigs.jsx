import React, { useState } from "react";
import "./Gigs.scss";//have to get rid of Gigs page in pages
//import {MyGigs} from "../../data";
//import MyGigs from "../../components/myGigs/MyGigs"
import GigCard from "../../components/gigCard/GigCard";
// Assuming you need to import it from your data
import { gigs } from "../../data";  // Uncomment or add this line


const Gigs = () => {
    const[sort,setSort] = useState("sales");
    const[open,setOpen] = useState(false);

    //Function RE-Sort
    const reSort =(type) => {

        setSort(type)
        setOpen(false)
    }
    return (
        
        
            <div className="myGigs"> 
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

/*const MyGigs = () => {
    return(
        <></>
    )
}
export default MyGigs;*/