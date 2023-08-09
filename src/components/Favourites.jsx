import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.css'

function Favourites(props) {
    return (
        <div className="main">
            <h2> Favourite characters</h2>
            <li className="back-link"><Link to="/"> Back </Link> </li>
        </div>
    )
}

export default Favourites