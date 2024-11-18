/*import React, { useState } from "react";
import "./Register.scss";
//import axios from "axios";
import upload from "../../utils/upload.js";
import newRequest from "../../utils/newRequest";
import{useNavigate} from "react-router-dom";

const Register = () => {
    const handleChange = (e) =>{
     setUser((prev) => {
        return{...prev, [e.target.name]: e.target.value};
     })
    }

    const handleSeller = (e) =>{
        setUser((prev) => {
           return{...prev, isSeller: e.target.checked};
        });
       };

       const navigate = useNavigate();

       const handleSubmit = async (e)=>{
        e.preventDefault()

        const url = await upload(file)
        
        console.log("Uploaded Image URL:", url);
        try{
            await newRequest.post("auths/register/", {
                ...user,
                img: url,
              });
             // navigate("/")
            
            
        }
  

        catch(err){
            console.log(err)
        }
        setUser((prev)=>{
            return{...prev,isSeller:e.target.checked}
        })

       }
    const [file,setFile] = useState(null);
    const [user,setUser] = useState({
        username:"",
        email:"",
        password:"",
        img:"",
        phone:"",
        isSeller:false,
        country:"",
        desc:""
    })
    
    return (
        <div className="register"> Register 
        
        <form onSubmit={handleSubmit}>
            <div className="left">
                <h1>Create a new account</h1>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Enter your username" onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"  onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Type in your email" onChange={handleChange}/>
                <label htmlFor="">Profile-Picture</label>
                <input type="file" name="" onChange={(e)=>setFile(e.target.files[0])}/>
                <label htmlFor="country">Country</label>
                <input type="text" name="country" placeholder="Enter your Country name" onChange={handleChange}/>
                <button type="submit"> Register </button>
                </div>
                <div className="right">
                    <h1> i want to become a seller </h1>
                    <div className="toggle">
                        <label htmlFor=""> Activate the seller account</label>
                        <label className="switch">
                            <input type="checkbox" onChange={handleSeller}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" placeholder="+1 123-456-7890" onChange={handleChange}/>
                    <label htmlFor="desc">Description</label>
                    <textarea name="desc" id="" cols="30" rows="10" placeholder="About yourself" onChange={handleChange}></textarea>
                </div>
                </form>
                </div>
    )
}

export default Register ;*/

import React, { useState } from "react";
import "./Register.scss";
import upload from "../../utils/upload.js";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    phone: "",
    isSeller: false,
    country: "",
    desc: ""
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSeller = (e) => {
    setUser((prev) => ({
      ...prev,
      isSeller: e.target.checked
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError("Please upload a profile picture.");
      return;
    }

    // Upload image and get URL
    const url = await upload(file);
    console.log("Uploaded Image URL:", url);

    // Check if URL was returned successfully
    if (!url) {
      setError("Failed to upload image. Please try again.");
      return;
    }

    try {
      await newRequest.post("auths/register/", {
        ...user,
        img: url,
      });
      setSuccess(true);
      setError(null);
      // Optionally reset the form here
      setUser({
        username: "",
        email: "",
        password: "",
        img: "",
        phone: "",
        isSeller: false,
        country: "",
        desc: ""
      });
      setFile(null);
      navigate("/"); // Navigate to another page on success
    } catch (err) {
      console.log(err);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleChange}
            value={user.username}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Type in your email"
            onChange={handleChange}
            value={user.email}
            required
          />
          <label htmlFor="">Profile Picture</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            placeholder="Enter your country name"
            onChange={handleChange}
            value={user.country}
            required
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input
                type="checkbox"
                onChange={handleSeller}
                checked={user.isSeller}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="+1 123-456-7890"
            onChange={handleChange}
            value={user.phone}
          />
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            cols="30"
            rows="10"
            placeholder="About yourself"
            onChange={handleChange}
            value={user.desc}
          ></textarea>
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Registration successful!</p>}
      </form>
    </div>
  );
};

export default Register;
