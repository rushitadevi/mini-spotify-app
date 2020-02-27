import React from "react"
import spotifyLogo from "../logo/Spotify_Logo.png"
import btnNext from "../PlayerButtons/Next.png"
import btnPrevious from "../PlayerButtons/Previous.png"
import btnRepeat from "../PlayerButtons/Repeat.png"
import btnShuffle from "../PlayerButtons/Shuffle.png"
import btnPlay from "../PlayerButtons/Play.png"
import { Link } from "react-router-dom"
import { fetchTracksByPlayListId, fetchPlayListById } from "../Actions/Album.js"
import { connect } from "react-redux";

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
            preViewUrl: undefined,
            urlExists: false
        }
    }

    start = (url) => {
        // console.log("hii", url)
        let audio = new Audio();
        audio.src = url

        this.setState({
            urlExists: !this.state.urlExists
        })
        console.log(audio, "audio")
        if (this.state.urlExists === true) {
            console.log("inside")
            audio.pause();
        }
        else {
            console.log("ot")
            audio.play();
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
        console.log("pls", this.props.playLists.playList)

        return (
            <>
                <div className="Container">
                    <div className="sideBar"><img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
                        <ul className="ulList" >
                        <Link to={"/"} ><a className="li" href="/" >Home</a></Link>
                            <Link to={"/search"} ><a className="li" href="/search" >Search</a></Link>
                            <Link to={"/categories/"}><a className="li" href="/categories/">Categories</a></Link>
                            <Link to={"/"}><a className="li">Log Out</a></Link>
                        </ul>
                    </div>
                    <div className="mainTracksContent">
                        <div className="insideContainer">
                            <div className="mainLeftContent">
                                {this.props.playLists.playList &&
                                    <>
                                        <img id="imgMain" src={this.props.playLists.playList.images[0].url} alt="no" /> */}
                                        {/* {/* <a>{this.props.playLists.playListsItems.name}</a>   */}
                                    </>
                                }
                                <button id="btnPlayList" >Play</button>
                            </div>
                            <div className="mainRightContent">
                                {this.props.playLists.tracks && this.props.playLists.tracks.map((track) => (
                                    <div class="col playlist">
                                        {track.track.preview_url !== null &&
                                            <>
                                                <button className="btnTracks"
                                                    controls onClick={() => this.start(track.track.preview_url)
                                                    }  >
                                                    {track.track.name}
                                                </button>
                                            </>
                                        }
                                        <div>{track.track.artists.name}</div>
                                    </div>
                                ))}
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
                    {this.state.urlExists ? (
                        <a href="/">
                            <img src={btnShuffle} id="btnPlay" alt="shuffle" />
                        </a>
                    ) :
                        (
                            <a href="/">
                                <img src={btnPlay} id="btnPlay" alt="shuffle" />
                            </a>
                        )
                    }
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

