import React from "react"
import btnNext from "../PlayerButtons/Next.png"
import btnPrevious from "../PlayerButtons/Previous.png"
import btnRepeat from "../PlayerButtons/Repeat.png"
import btnShuffle from "../PlayerButtons/Shuffle.png"
import btnPlay from "../PlayerButtons/Play.png"
import { fetchTracksByPlayListId, fetchPlayListById } from "../Actions/Album.js" //fetching method from actions
import { connect } from "react-redux";
import spotifyLogo from "../logo/Spotify_Logo.png"
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar";

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    fetchTracksByPlayListIdThunk: (playListid) => dispatch(fetchTracksByPlayListId(playListid)),
    fetchPlayListByIdThunk: (playListid) => dispatch(fetchPlayListById(playListid))
});

class TracksByPlayList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preViewUrl: "",
            urlExists: false,
            audio: new Audio()
        }
    }

    start = (url, source) => {
        //source is the parameter taken as there is request from two buttons
        if (source != null) {
            this.setState({
                urlExists: !this.state.urlExists,
                preViewUrl: url //it will assign url to state
            })
        }
        else {
            this.setState({
                urlExists: !this.state.urlExists,
            })
        }
        if (this.state.audio.src === undefined || this.state.audio.src !== url) {
            this.state.audio.src = url
            this.state.audio.play()
        }
        else if (source === null) {
            this.state.audio.src = url
            this.state.audio.play()
        }
        else {
            this.state.audio.pause()
        }
    }

    componentDidMount = () => {
        let playListid = this.props.match.params.id; //from url
        //getting tracks as per playlist id
        this.props.fetchTracksByPlayListIdThunk(playListid)

        //fetch playList by playlist id
        this.props.fetchPlayListByIdThunk(playListid)
    }

    render() {
        return (
            <>
                <div className="containerTracs">
                    <div className="divTracks">
                        <div className="navBarTracks">
                            <div className="sideBarTracks">
                                <img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
                                <ul className="ulList" >
                                    <Link to={"/"} className="li">Home</Link>
                                    <Link to={"/search/"} className="li">Search</Link>
                                    <Link to={"/categories/"} className="li">Categories</Link>
                                </ul>
                            </div>
                        </div>
                        <div className="mainTracksContent">
                            <div className="insideContainer">
                                <div className="mainLeftContent">
                                    {this.props.playLists.playList &&
                                        <>
                                            <img id="imgMain" src={this.props.playLists.playList.images[0].url} alt="no" />
                                            <div style={{ textAlign: "center", padding: "30px" }}>
                                                <div className="displayName" >{this.props.playLists.playList.name}</div>
                                            </div>
                                            <div>
                                                <button id="btnPlayList" onClick={() => this.start(this.state.preViewUrl, null)} >Play</button>
                                            </div>
                                        </>
                                    }
                                </div> {/* end of mainLeftContent */}
                                <div className="mainRightContent">
                                    {this.props.playLists.tracks && this.props.playLists.tracks.map((track, id) => (
                                        <div key={id} className="col playlist">
                                            {track.track.preview_url !== null &&
                                                <>
                                                    <button className="btnTracks"
                                                        controls onClick={() => this.start(track.track.preview_url, "btn")
                                                        }  >
                                                        {track.track.name}
                                                    </button>
                                                </>
                                            }
                                            <div>{track.track.artists.name}</div>
                                        </div>
                                    ))}
                                </div> {/* end of mainRightContent */}
                            </div> {/* end of insideContainer */}
                        </div> {/* end of mainTracksContent */}
                    </div> {/* end of container */}
                    <div className="footerTracks" >
                        <a href="/">
                            <img src={btnNext} id="btnNext" alt="shuffle" />
                        </a>
                        <a href="/">
                            <img src={btnPrevious} id="btnPrevious" alt="previous" />
                        </a>
                        {this.state.urlExists ? (
                            <div>
                                <img src={btnShuffle} id="btnPlay" onClick={() => this.start(this.state.preViewUrl, "btn")} alt="play" />
                            </div>
                        ) :
                            (
                                <div >
                                    <img src={btnPlay} id="btnPlay" alt="play" />
                                </div>
                            )
                        }
                        <a href="/">
                            <img src={btnNext} id="btnShuffle" alt="shuffle" />
                        </a>
                        <a href="/">
                            <img src={btnRepeat} id="btnRepeat" alt="repeat" />
                        </a>
                    </div>
                </div>
                {/* Footer */}

            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TracksByPlayList);

