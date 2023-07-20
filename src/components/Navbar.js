import React from 'react'
import Items from './Items'


export default function Navbar() {
    return (
        <div className="banner">
            <Items />
            <div className="banner__text">
                <div className="container">
                    <h3>Pizza Delivery</h3>
                    <h1>MAESTRO <br /> PIZINNI</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Adipisci maxime et consectetur labore expedita.</p>
                </div>
            </div>
            <button className="btn">DEVLIVERY NOW</button>
        </div>
    )
}
