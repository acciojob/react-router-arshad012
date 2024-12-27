
import React from "react";
import './../styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from "../Routes/AllRoutes";
import Navlinks from "../Navlinks/Navlinks";

const App = () => {
  return (
    <BrowserRouter>
      <Navlinks />
      <AllRoutes />
    </BrowserRouter>
  )
}

export default App;