import React, { Component } from "react"
import spotifyLogo from "../logo/Spotify_Logo.png"
import btnNext from "../PlayerButtons/Next.png"
import btnPrevious from "../PlayerButtons/Previous.png"
import btnRepeat from "../PlayerButtons/Repeat.png"
import btnShuffle from "../PlayerButtons/Shuffle.png"
import btnPlay from "../PlayerButtons/Play.png"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { fetchPlayListsByCategory } from "../Actions/Album.js"

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    fetchPlayListsByCategoryThunk: (categoryId) => dispatch(fetchPlayListsByCategory(categoryId))
});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null
        }
    }



    componentDidMount = () => {
        let categoryArray = ["mood", "pop", "toplists"];
        categoryArray.forEach((categoryId) => {
            this.props.fetchPlayListsByCategoryThunk(categoryId);
        })
    }

    render() {
        console.log(this.props.playLists, "play")
        return (
            <>
               
                <div className="MainContainer">
                    <div className="sideBar">
                        <img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
                        <ul className="ulList" >
                            <Link to={"/main"} ><a className="li" href="/main" >Home</a></Link>
                            <Link to={"/album"} ><a className="li" href="/album" >Search</a></Link>
                            <Link to={"/categories/"}><a className="li">Categories</a></Link>
                            <li className="li">New Releases</li>
                        </ul>
                    </div>
                    <div className="RightSideBar">
                        <div className="mainDisplay">
                            {/* <div
                                className="nav-link flex-row  mt-4  "
                                id="v-pills-tab"
                                aria-orientation="vertical" >
                                <a className="nav-item nav-link" href="/">Home</a>
                                <a className="nav-item nav-link" href="/album">Search</a>
                            </div> */}
                            {this.props.playLists.moodPlayList &&
                                this.props.playLists.moodPlayList.map((playList) => (
                                    <div className="displayCards">
                                        <ul className="cards">
                                            <li className="cards__item">
                                                <div className="card">
                                                    <div className="card__image card__image--fence">
                                                        <img src={playList.images[0].url} alt="img" ></img>
                                                    </div>
                                                    <div className="card__content">
                                                        <Link to={"/tracks/" + playList.id} > <div className="card__title">{playList.name}</div></Link>
                                                        <b><p className="card__text"> {playList.description} </p> </b>
                                                        {/* <button className="btn btn--block card__btn">Button</button> */}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )).slice(0, 3)
                            }
                            <div>
                                <Link to={"/displayPlaylist/mood"} >SEE ALL</Link>
                            </div>
                            {this.props.playLists.popPlayList &&
                                this.props.playLists.popPlayList.map((playList) => (
                                    <div className="displayCards">
                                        <ul className="cards">
                                            <li className="cards__item">
                                                <div className="card">
                                                    <div className="card__image card__image--fence">
                                                        <img src={playList.images[0].url} alt="img" ></img>
                                                    </div>
                                                     <div className="card__content">
                                                        <Link to={"/tracks/" + playList.id} > <div className="card__title">{playList.name}</div></Link>
                                                        <b><p className="card__text"> {playList.description} </p> </b>
                                                        {/* <button className="btn btn--block card__btn">Button</button> */}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )).slice(0, 3)
                            }
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
