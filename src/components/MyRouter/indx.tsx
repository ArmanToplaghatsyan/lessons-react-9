import { useRoutes } from 'react-router-dom';
import { Users } from '../../pages/Users';
import React from 'react';
import { Layout } from '../../pages/Layout';
import { MyError } from '../../pages/MyError';
import { AddUser } from '../../pages/AddUser';
import { DetailsUser } from '../../pages/DetailsUser';

export const MyRoutes = React.memo(() => {
  const router = useRoutes([
    {
        path: '/', 
        element: <Layout/>,
        children:[
            {path:"", element:<Users/>},
            {path:"addUser", element:<AddUser/>},
            {path:'userDetails/:id', element:<DetailsUser/>},
            
        ]    
    }, {
        path:"*",
        element: <MyError/>    }]);

  return router;
});
