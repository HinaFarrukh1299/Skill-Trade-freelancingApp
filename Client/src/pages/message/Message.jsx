import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

const Message = () => {
    return (
        <div className="message"> 
        <div className="container">
            <span className="breadcrumbs"><Link to='/messages'>Messages</Link> > Waleed Waraich > </span>
            <div className="messages">
                <div className="items">
                    <img src="../img/user1.png" alt="" />
                    <p> No messages to display from this user</p>
                </div>
                <div className="items owner">
                    <img src="../img/user2.png" alt="" />
                    <p> No messages to display from the owner</p>
                </div>
            </div>
            <div className="write">
                <textarea name="" id="" cols="30" rows="10" placeholder="Type your message"></textarea>
                <button>Send</button>
            </div>
            </div>
             </div>
    )
}

export default Message ;