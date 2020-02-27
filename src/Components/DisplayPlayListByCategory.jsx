import React from 'react';
import spotifyLogo from "../logo/Spotify_Logo.png"
import { connect } from "react-redux";
import { fetchPlayListsByCategory } from "../Actions/Album.js"
import { Link } from "react-router-dom"
import btnNext from "../PlayerButtons/Next.png"
import btnPrevious from "../PlayerButtons/Previous.png"
import btnRepeat from "../PlayerButtons/Repeat.png"
import btnShuffle from "../PlayerButtons/Shuffle.png"
import btnPlay from "../PlayerButtons/Play.png"
const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    fetchPlayListsByCategoryThunk: (categoryId) => dispatch(fetchPlayListsByCategory(categoryId)) //dispatching action
});

class DisplayPlayList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredArr: []
        }
    }

    componentDidMount = () => {
        //filtering array categorywise.
        var newFilteredArray = this.props.playLists.playListsItems.filter(item =>
            item.title === this.props.match.params.categoryId)
        if (newFilteredArray.length > 0) {
            this.setState({
                filteredArr: newFilteredArray
            })
        }
        else {
            console.log("Please login")
        }
    }

    render() {
        return (
            <>
                <div className="container">{/*  container */}
                    <div className="sideBar"> {/* sideBar */}
                        <img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
                        <ul className="ulList" >
                            <Link to={"/"} ><a className="li" href="/" >Home</a></Link>
                            <Link to={"/search"} ><a className="li" href="/search" >Search</a></Link>
                            <Link to={"/categories/"}><a className="li" href="/categories/">Categories</a></Link>
                            <Link to={"/"}><a className="li">Log Out</a></Link>
                        </ul>
                    </div>
                    <div className="RightSidBar">
                        <div className="MainContent">
                            {this.state.filteredArr && this.state.filteredArr.map((x, id) =>
                                <div className="displayDivCategory" key={id}>
                                    {x.items.map(playList =>
                                        <div className="displayCards">
                                            <ul >
                                                <div className="card">
                                                    <div className="divImg" >
                                                        <img src={playList.images[0].url} alt="img" ></img>
                                                    </div> {/* end of divImg */}
                                                    <Link to={"/tracks/" + playList.id} > <div className="card__title">{playList.name}</div></Link>
                                                    <b><p className="card__text"> {playList.description} </p> </b>
                                                </div> {/* end of card */}
                                            </ul> {/* end of ul */}
                                        </div>)}
                                </div>
                            )
                            }
                        </div> {/* end of MainContent */}
                    </div> {/* enf of RightSideBar */}
                </div> {/* end of container */}
                {/* <Footer/> */}
                <div className="footer">
                    <a href="/">
                        <img src={btnShuffle} id="btnNext" alt="shuffle" />
                    </a>
                    <a href="/">
                        <img src={btnPrevious} id="btnPrevious" alt="previous" />
                    </a>
                    <a href="/" >
                        <img src={btnPlay} id="btnPlay" alt="play" />
                    </a>
                    <a href="/">
                        <img src={btnNext} id="btnShuffle" alt="shuffle" />
                    </a>
                    <a href="/">
                        <img src={btnRepeat} id="btnRepeat" alt="repeat" />
                    </a>
                </div>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPlayList);