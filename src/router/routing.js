import React from "react";
import Navbar from "../components/Navbar";
import { routes } from "./routes";

const routing = () => {
    return [
        {
            path: "/",
            element: <Navbar/>,
            children: routes
        }
    ]
}

export default routing;