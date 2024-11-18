import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {


    const currentUser = {
        id: 1,
        userName: 'HinaFarrukh-',
        isSeller: true,
    }
    const message = "hi im a dummy message...just to show how a message would look like on the screen,just a total random message for reference";
    return (
        <div className="messages"> 
            <div className="container">
                <div className="title">
                    <h1> Messages </h1>

                </div>
                <table>
                    <tr>
                        <th>Buyer</th>
                        <th>Last Message</th>
                    
                        <th>Date </th>
                        <th>Action</th>
                    </tr>
                    <tr className="active">
                        <td> Waleed Waraich </td>
                        <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                        <td>1 day ago</td>
                        <td> <button> Mark as read</button>
                        </td>
                        <td><img className='delete' src="../img/message.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td> Waleed Waraich </td>
                        <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
                        <td>1 day ago</td>
                       
                        
                        <td><img className='delete' src="../img/message.png" alt="" /></td>
                    </tr>

                </table>
            </div> </div>
    )

}

export default Messages;