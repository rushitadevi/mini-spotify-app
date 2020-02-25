import React from "react"
import spotifyLogo from "../logo/Spotify_Logo.png"
import btnNext from "../PlayerButtons/Next.png"
import btnPrevious from "../PlayerButtons/Previous.png"
import btnRepeat from "../PlayerButtons/Repeat.png"
import btnShuffle from "../PlayerButtons/Shuffle.png"
import btnPlay from "../PlayerButtons/Play.png"
import { Link } from "react-router-dom"
import { fetchTracksByPlayListId } from "../Actions/Album.js"
import { connect } from "react-redux";

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    fetchTracksByPlayListIdThunk: (playListid) => dispatch(fetchTracksByPlayListId(playListid))
});

class TracksByPlayList extends React.Component {

    componentDidMount = () => {
        let playListid = this.props.match.params.id;
        console.log(playListid, "id")
        this.props.fetchTracksByPlayListIdThunk(playListid)
    }
    render() {
        console.log(this.props.playLists.moodPlayList,"ooo")
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
                            {this.props.playLists.tracks && this.props.playLists.tracks.map((track) => (
                                <div class="col playlist">
                                    <div>{track.track.name}</div>
                                    <audio controls>
                                        <source src={track.track.preview_url} type="audio/mpeg" autoPlay controls />
                                    </audio>
                                    <div>{track.track.artists.name}</div>
                                </div>
                            ))}

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

export default connect(mapStateToProps, mapDispatchToProps)(TracksByPlayList);

