import React from 'react';
import spotifyLogo from "../logo/Spotify_Logo.png"

import { Link } from "react-router-dom"

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="sideBar">
                <img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
                <ul className="ulList" >
                <Link to={"/"} className="li">Home</Link>
                <Link to={"/search/"} className="li">Search</Link>
                <Link to={"/categories/"} className="li">Categories</Link>
                </ul>
            </div>
        );
    }
}


export default NavBar;
