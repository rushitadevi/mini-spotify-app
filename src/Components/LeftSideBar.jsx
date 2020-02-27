import React from 'react';
import { Link } from "react-router-dom"
import spotifyLogo from "../logo/Spotify_Logo.png"

class LeftSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="sideBar">
            <img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
            <ul className="ulList" >
                <Link to={"/"} ><a className="li" href="/" >Home</a></Link>
                <Link to={"/album"} ><a className="li" href="/album" >Search</a></Link>
                <Link to={"/categories/"}><a className="li">Categories</a></Link>
                <li className="li">New Releases</li>
            </ul>
        </div>
         );
    }
}
 
export default LeftSideBar;