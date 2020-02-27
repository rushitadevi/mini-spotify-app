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
// import Footer from "./Footer.jsx"

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    setLoading: () =>
        dispatch({
            type: "LOADING",
        }),
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
      this.props.setLoading();
      let categoryArray = ["mood", "pop", "focus", "rock"];
        categoryArray.forEach((categoryId) => {
            this.props.fetchPlayListsByCategoryThunk(categoryId);
        })
    }

    render() {
        console.log(this.props.playLists,"reee")
        return (
            <>
                <div className="MainContainer">
                    <div className="sideBar">
                        <img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
                        <ul className="ulList" >
                            <Link to={"/"} ><a className="li" href="/" >Home</a></Link>
                            <Link to={"/search"} ><a className="li" href="/search" >Search</a></Link>
                            <Link to={"/categories/"}><a className="li" href="/categories/">Categories</a></Link>
                            {/* <Link to={"/"}><a className="li">Log Out</a></Link> */}
                        </ul>
                    </div>
                    <div className="RightSideBar">
                        <div className="mainDisplay">
                            {this.props.playLists.playListsItems && this.props.playLists.playListsItems.map((x, id) =>
                                <div className="displayDiv" key={id}>
                                    <div className="title" >{x.title}</div>
                                    {x.items.map(playList =>
                                        <div className="displayCards">
                                            <ul className="cards">
                                                <li className="cards__item">
                                                    <div className="card">
                                                        <div className="divImg" >
                                                            <img src={playList.images[0].url} alt="img" ></img>
                                                        </div>
                                                        <div className="card__content">
                                                            <Link to={"/tracks/" + playList.id} > <div className="card__title">{playList.name}</div></Link>
                                                            <b><p className="card__text"> {playList.description} </p> </b>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>).slice(0, 3)
                                        
                                        }
                                    <div>
                                    <div className="seeAll">
                                            <Link to={"/displayPlaylist/"+ x.title} >SEE ALL</Link>
                                        </div>
                                    </div>
                                </div>
                            ).slice(0, 3)
                            }
                        </div>
                    </div>
                </div>
                {/* <Footer/> */}
                <div className="footer" style={{ display: "flex" }} >
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
