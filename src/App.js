import React from "react";
import "./styles/App.css"
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import routing from "./router/routing";
import ParticleBackground from './components/config/ParticleBackground';


function App() {

  const routes = routing();
  const MyRouter = createBrowserRouter(routes)

  return (
    <div className="App" style={{color:"white"}}>
      <ParticleBackground/>
      <RouterProvider router={MyRouter}/>
    </div>
  );
}

export default App;
