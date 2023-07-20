import React from 'react'
import {Link} from 'react-router-dom';

function Items() {
  return (
    <div className="navbar">
        <div className="logo">
            <h1><span>Fast</span> Food</h1>
        </div>
        <div className="items_list">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Items;