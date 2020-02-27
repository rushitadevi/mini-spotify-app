import React from 'react';
import { connect } from "react-redux";
import { fetchCategories } from "../Actions/Album.js"
import { Link } from "react-router-dom";
import btnNext from "../PlayerButtons/Next.png"
import btnPrevious from "../PlayerButtons/Previous.png"
import btnRepeat from "../PlayerButtons/Repeat.png"
import btnShuffle from "../PlayerButtons/Shuffle.png"
import btnPlay from "../PlayerButtons/Play.png"
import spotifyLogo from "../logo/Spotify_Logo.png"

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    fetchCategoriesThunk: () => dispatch(fetchCategories())
});

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.fetchCategoriesThunk();
    }
    render() {
        return (
            <>
                <div className="MainContent" >
                    <div className="sideBar">
                        <ul className="ulList" >
                        <img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
                        <Link to={"/"} ><a className="li" href="/" >Home</a></Link>
                            <Link to={"/search"} ><a className="li" href="/search" >Search</a></Link>
                            <Link to={"/categories/"}><a className="li" href="/categories/">Categories</a></Link>
                            <Link to={"/"}><a className="li">Log Out</a></Link>
                        </ul>
                    </div>
                    <div className="rightSideBar">
                        <div className="mainContent">
                            {this.props.playLists.categories &&
                                this.props.playLists.categories.map((category,id) => (
                                    <div className="displayCards" key={id}>
                                        <ul className="cards">
                                            <li className="cards__item">
                                                <div className="card">
                                                    <div className="card__image card__image--fence">
                                                        <img src={category.icons["0"].url} alt="img" ></img>
                                                    </div>
                                                    <div className="card__content">
                                                        {/* <Link to={"/tracks/" + playList.id} ><div className="card__title">{playList.name}</div></Link>*/}
                                                        <b><p className="card__text"> {category.name} </p> </b>
                                                        {/* <button className="btn btn--block card__btn">Button</button> */}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);

