import React from "react";
//import Link from react-dom-router
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className='clock'>
      <ul className='Navigation'>

        <li className='Navigation'>
          <Link to="/">Home</Link>
        </li>

        <li className='Navigation'>
          <Link to="/clock">Clock</Link>
        </li>

        <li className='Navigation'>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>
    </div>

  );
}
export default Navigation;