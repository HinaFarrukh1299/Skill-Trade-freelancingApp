import React, { useRef, useState } from "react";
import "./Gigs.scss";//have to get rid of Gigs page in pages
//import {MyGigs} from "../../data";
//import MyGigs from "../../components/myGigs/MyGigs"
import GigCard from "../../components/gigCard/GigCard";
// Assuming you need to import it from your data
//import { gigs } from "../../data";  // Uncomment or add this line
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";
//import { gigs } from "../../data";
import { useQuery } from '@tanstack/react-query';



const Gigs = () => {

    const[sort,setSort] = useState("sales");
    const[open,setOpen] = useState(false);
    const minRef = useRef();
    const maxRef = useRef();

    const {search} = useLocation();
    console.log(location);

    const { isLoading, error, data } = useQuery({
        queryKey: ['repodata'],
        queryFn: () =>
          newRequest.get(`/gigs`).then(res=>{
            return res.data ;
          }),
          
        });
        console.log(data);

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
                    Skill-Trade  Graphics And Design 
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

                    {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
                </div>
                </div> 
                </div>
                </div>

                
   ); 
    }

export default Gigs ;

/* fetching via .env */
/*import React, { useRef, useState } from "react";
import "./Gigs.scss";  // Style file for the Gigs component
import GigCard from "../../components/gigCard/GigCard";  // GigCard component
import { useLocation } from "react-router-dom";  // To access URL query params
import { useQuery } from '@tanstack/react-query';
import newRequest from "../../utils/newRequest";  // Utility for making API requests

const Gigs = () => {
    const [sort, setSort] = useState("sales");
    const [open, setOpen] = useState(false);
    const minRef = useRef();
    const maxRef = useRef();
    
    const { search } = useLocation();

    // Fetch data from the backend using the `useQuery` hook
    const { isLoading, error, data } = useQuery({
        queryKey: ['gigs'],
        queryFn: async () => {
            const response = await newRequest.get(`/gigs`);  // Adjust API endpoint
            return response.data;
        },
    });

    // Function to handle sorting
    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    return (
        <div className="myGigs">
            <h3> My Gigs </h3>

            <div className="container">
                <div className="breadcrumbs">
                    Skill-Trade  Graphics And Design
                    <h1>AI Artists</h1>
                    <p>Explore the boundaries of Art And Technology with Skill-Trade's AI Artists</p>

                    <div className="menu">
                        <div className="left">
                            <span>Budget</span>
                            <input type="text" placeholder="min" ref={minRef} />
                            <input type="text" placeholder="max" ref={maxRef} />
                            <button>Apply</button>
                        </div>
                        <div className="right">
                            <span className="sortBy">SortBy</span>
                            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
                            <img src="../img/down.png" alt="" onClick={() => setOpen(!open)} />
                            {open && (
                                <div className="rightMenu">
                                    {sort === "sales" ? (
                                        <span onClick={() => reSort('createdAt')}>Newest</span>
                                    ) : (
                                        <span onClick={() => reSort('sales')}>Best Selling</span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="cards">
                        {isLoading
                            ? "loading"
                            : error
                            ? "Something went wrong!"
                            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gigs;*/


