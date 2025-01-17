// import React from "react";
// import { Link } from "react-router-dom";

// const Navlinks = () => {
//     return (
//         <div>
//             <Link to='/'>Home</Link>
//             <Link to='/about'>About</Link>
//         </div>
//     )
// }

// export default Navlinks;


import React from 'react';
import { Link } from 'react-router-dom';

const Navlinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navlinks;