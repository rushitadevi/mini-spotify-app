import React from "react"
import spotifyLogo from "../logo/Spotify_Logo.png"
import btnNext from "../PlayerButtons/Next.png"
import btnPrevious from "../PlayerButtons/Previous.png"
import btnRepeat from "../PlayerButtons/Repeat.png"
import btnShuffle from "../PlayerButtons/Shuffle.png"
import btnPlay from "../PlayerButtons/Play.png"
import { Link } from "react-router-dom"

class PlayList extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="leftCol"><img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
                        <ul className="ulList" >
                            <Link to={"/"} ><a className="li" href="/" >Home</a></Link>
                            <Link to={"/album"} ><a className="li" href="/album" >Search</a></Link>
                            <li className="li">Categories</li>
                            <li className="li">New Releases</li>
                        </ul>
                    </div>
                    <div className="mainContent">
                        <div className="mainLeftContent">
                            <img id="imgMain" src="http://i.imgur.com/OUla6mK.jpg" alt="no" />
                            <button id="btnPlayList" >Play</button>
                        </div>
                        <div className="mainRightContent">
                            <div class="col playlist">
                                <audio controls>
                                    <source src={""} type="audio/mpeg" autoPlay controls />
                                </audio>

                            </div>
                            <div class="col playlist">
                                <audio controls>
                                    <source src={""} type="audio/mpeg" autoPlay controls />
                                </audio>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <a href="/">
                        <img src={btnNext} id="btnNext" alt="shuffle" />
                    </a>
                    <a href="/">
                        <img src={btnPrevious} id="btnPrevious" alt="shuffle" />
                    </a>
                    <a href="/">
                        <img src={btnPlay} id="btnPlay" alt="shuffle" />
                    </a>
                    <a href="/">
                        <img src={btnNext} id="btnShuffle" alt="shuffle" />
                    </a>
                    <a href="/">
                        <img src={btnRepeat} id="btnRepeat" alt="shuffle" />
                    </a>
                </div>

            </>
        );
    }
}

export default PlayList;

