import React from 'react';
import './App.scss';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Add from './pages/add/Add';
//import MyGigs from './pages/myGigs/Gigs';
import MyGigs from './pages/myGigs/MyGigs';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs';

import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Orders from './pages/orders/Orders';
import Login from './pages/login/Login';
import Register from './pages/register/Register'; // Import Register component
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';


function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
        <NavBar />
        <Outlet />
        <Footer />
    </QueryClientProvider>
       
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/myGigs',
          element: <Gigs />
        },
        {
          path: '/gig/:id',
          element: <Gig />
        },
        {
          path: '/gigs/:id',
          element: <Gigs />
        },
        {
          path: '/myGigs/:id',
          element: <MyGigs />
        },
        {
          path: '/messages',
          element: <Messages />
        },
        {
          path: '/message/:id',
          element: <Message />
        },
        {
          path: '/orders',
          element: <Orders />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/add',
          element: <Add />
        },
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
