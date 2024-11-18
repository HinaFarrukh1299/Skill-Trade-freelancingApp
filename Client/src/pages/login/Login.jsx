//import React from "react";
/*import React,{useState} from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
       try{ const res = await axios.post("http://localhost:8105/api/auths/login",{
            username ,
            password ,
        })
        localStorage.setItem("currentUser",JSON.stringify(res.data));
        console.log(res.data);
    } catch(err) {
        setError(err);
        console.log(err)
    }

        /*try{
            const res = await newRequest.post("/auth/login",{username,password});
            localStorage.setItem("currentUser",JSON.stringify(res.data));
            navigate("/")
        }
        catch (err) {

            setError(err.response.data);

        }*/


   /* } 

    return (
        <div className="login">
        <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <label htmlFor=""> Username</label>
            <input type="text" name="username" placeholder="Enter Your Username here" onChange={e=>setUsername(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="password" name="password" onChange={e=>setUsername(e.target.value)} />
            <button type="submit"> Login </button>
            </form></div>
            
    )
}

export default Login ; */

/*import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/*const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8105/api/auths/login", {
                username,
                password,
            });
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            console.log(res.data);
            // Navigate to home or another route after successful login
            navigate("/");
        } catch (err) {
            // Update to display a user-friendly error message
            setError(err.response ? err.response.data : "Something went wrong");
            console.log(err);
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Your Username here"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password here"
                    onChange={(e) => setPassword(e.target.value)} // Fixed this line
                />
                {error && <p className="error">{error}</p>} {/* Display error message if exists *//*}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;*/

/*import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8105/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      console.log(res.data);
    } catch (err) {
      setError(err.response ? err.response.data : "An error occurred");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;*/

import React, { useState } from "react";
//import axios from "axios";
import "./Login.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
 
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res =  await newRequest.post("auths/login",{username,password});
      localStorage.setItem('currentUser',JSON.stringify(res.data));
      navigate("/")
      // Redirect or do something after successful login
    } catch (err) {
      setError(err.resonse.data);
      
    }
  };

  return (
    <div className="login">
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && error}
    </form>
    </div>
  );
};

export default Login;

