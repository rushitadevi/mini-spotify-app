import React from 'react';
import spotifyLogo from "../logo/Spotify_Logo.png"
import { connect } from "react-redux";
import { fetchPlayListsByCategory } from "../Actions/Album.js"
import { Link } from "react-router-dom"
const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    fetchPlayListsByCategoryThunk: (categoryId) => dispatch(fetchPlayListsByCategory(categoryId))
});

class DisplayPlayList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.fetchPlayListsByCategoryThunk(this.props.match.params.categoryId)
    }

    render() {
        return (
            <>
                <div className="Container">
                    <div className="sideBar">
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
                            {this.props.playLists.moodPlayList &&
                                this.props.playLists.moodPlayList.map((playList, id) => (
                                    <ul className="cards" key={id}>
                                        <li className="cards__item">
                                            <div className="card">
                                                <div className="card__image card__image--fence">
                                                    <img src={playList.images[0].url} alt="img" ></img>
                                                </div>
                                                <div className="card__content">
                                                    <Link to={"/tracks/" + playList.id} > <div className="card__title">{playList.name}</div></Link>
                                                    <p className="card__text"> {playList.description} </p>
                                                    <button className="btn btn--block card__btn">Button</button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>))
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPlayList);