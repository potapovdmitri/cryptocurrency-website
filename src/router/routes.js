import React from 'react';
import Dashboard from '../pages/Dashboard';
import Exchange from '../pages/Exchange';
import About from '../pages/About';
import Contacts from '../pages/Contacts';

export const routes = [
    {
        element: <Dashboard/>,
        index: true
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
    },
    {
        path: "/exchange",
        element: <Exchange/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contacts",
        element: <Contacts/>
    }
]