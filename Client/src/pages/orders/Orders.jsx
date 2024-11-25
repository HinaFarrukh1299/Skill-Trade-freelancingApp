import React from "react";
import "./Orders.scss";
//import { Link } from "react-router-dom";

const Orders = () => {
    const currentUser = {
        id:1,
        userName:'HinaFarrukh-',
        isSeller:true,
    }
    return (
        <div className="orders"> Orders
        <div className="container">
      <div className="title">
        <h1> Orders </h1>
       
      </div>
      <table>
        <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"} </th>
            <th>Contact</th>
        </tr>
        <tr>
            <td><img src="../img/Gig1personal.jpg" alt="" className='image' /></td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src="../img/message.png" alt="" /></td>
                    </tr>
                    <tr>
            <td><img src="../img/Gig1personal.jpg" alt="" className='image' /></td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src="../img/message.png" alt="" /></td>
                    </tr>
      </table>
      </div> </div>
    )
}

export default Orders ;


/* implementing backend-url via .env */
/*const Orders = () => {
  const currentUser = {
    id: 1,
    userName: "HinaFarrukh-",
    isSeller: true,
  };

  const [orders, setOrders] = useState([]); // State to store the fetched orders
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Assuming your API endpoint is like `/api/orders`
        const res = await newRequest.get(`/orders/${currentUser.id}`);
        setOrders(res.data); // Set the orders from the response
        setLoading(false); // Stop loading once data is fetched
      } catch (err) {
        setError("Failed to fetch orders");
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchOrders();
  }, [currentUser.id]); // Re-fetch if the current user's ID changes

  if (loading) {
    return <div>Loading...</div>; // Show loading text while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Display error if there's any issue
  }

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <img
                      src={order.image || "../img/Gig1personal.jpg"} // Fallback image
                      alt={order.title}
                      className="image"
                    />
                  </td>
                  <td>{order.title}</td>
                  <td>{order.price}</td>
                  <td>{currentUser?.isSeller ? order.buyer : order.seller}</td>
                  <td>
                    <img
                      className="delete"
                      src="../img/message.png"
                      alt="Contact"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;*/