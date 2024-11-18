/*import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !=='/' ? "navBar active":"navBar"}>
    <div className='container'>
       <div className='logo'>
           <Link to='/' className='link'>
           <span className='text'>Skill-Trade
           
           <span className='dot'>.</span>
           </span>
           </Link>
       </div>
       <div className='links'>

          <span>Skill-Trade Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar; */
import React, { useEffect, useState } from 'react' ;
import "./Navbar.scss" ;
import {Link, useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // Add useLocation import
import newRequest from '../../utils/newRequest';

const NavBar = ()=> {

    const [active,setActive] = useState(false) ;
    const isActive = ( ()=> {
        window.scrollY >0 ? setActive (true) : setActive (false);
    })
    const {pathname} = useLocation() 
    const [open,setOpen] = useState(false) ;

    useEffect( ()=> {
        window.addEventListener("scroll",isActive);
        return () => {
            window.removeEventListener("scroll",isActive);
        };
    },[]);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const navigate = useNavigate();

    const handleLogout = async() => {
        try{
            await newRequest.post("/auths/logout");
            localStorage.setItem("currentUser",null);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }

    

    return (

    <div className={active || pathname !=='/' ? "navBar active":"navBar"}>
         <div className='container'>
            <div className='logo'>
                <Link to='/' className='link'>
                <span className='text'>Skill-Trade
                
                <span className='dot'>.</span>
                </span>
                </Link>
            </div>
            <div className='links'>
                <span>Skill-Trade business</span>
                <span>Explore</span>
                <span>English</span>
                
                {!currentUser?.isSeller && <span>Become a seller</span>}
               {!currentUser && <button> join in </button>}
               {currentUser && (

                 <div className='user' onClick={()=>setOpen(!open)}>
                    <img src={currentUser.img || "noavatar.png"} alt='' />
                    <span>{currentUser?.username}</span>
                    {open&&<div className="options">
                        {
                            currentUser?.isSeller && (
                                <>
                                <Link to='myGigs'>Gigs</Link>
                                <Link to='add'>Add New Gig</Link>
                                </>
                            )
                        }
                        <Link to='orders' className='link'>Orders</Link>
                        <Link to='messages' className='link'>Messages</Link>
                        <Link  className='link' onClick={handleLogout}>Logout</Link>
                        
                    </div>}
                 </div>

               )}
            </div>
        </div>

        {(active || pathname !=='/') && (
        <>
            <hr/>
            <div className="menu">
                
                
                <Link className="link menuLink" to='/'>
                UX/UI Design 
                </Link>
                <Link className='link' to='/'>
                Logo Design
                </Link>
                <Link className='link' to='/'>
                Front-End Web Development
                </Link>
                <Link className='link' to='/'>
                Back-End Web Development
                </Link>
                <Link className='link' to='/'>
                Full-Stack Web Development
                </Link>
                <Link className='link' to='/'>
                Content-Writing
                </Link>
                
            
            </div>
            
            </>
        )}
    </div>
    

    )
    
}

export default NavBar ;

