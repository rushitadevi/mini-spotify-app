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
    fetchCategoriesThunk: () => dispatch(fetchCategories()) //dispatching action
});

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.fetchCategoriesThunk(); //fetching categories from API
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
                                this.props.playLists.categories.map((category, id) => (
                                    <div className="displayCards" key={id}>
                                        <ul className="cards">
                                            <li >
                                                <div className="card">
                                                    <div className="divImg">
                                                        <img src={category.icons["0"].url} alt="img" ></img>
                                                    </div>{/* end of divImg */}
                                                    <div className="card__content">
                                                        <b><p className="card__text"> {category.name} </p> </b>
                                                    </div> {/* end of card_content */}
                                                </div> {/* end of card */}
                                            </li> {/* end of li */}
                                        </ul>
                                    </div>
                                ))}
                        </div>{/* end of mainContent */}
                    </div> {/* end of rightSideBar */}
                </div> {/* end of MainContent */}
                {/* Footer */}
                <div className="footer">
                    <a href="/">
                        <img src={btnShuffle} id="btnShuffle" alt="Next" />
                    </a>
                    <a href="/">
                        <img src={btnPrevious} id="btnPrevious" alt="Previous" />
                    </a>
                    <a href="/">
                        <img src={btnPlay} id="btnPlay" alt="Play" />
                    </a>
                    <a href="/">
                        <img src={btnNext} id="btnShuffle" alt="Shuffle" />
                    </a>
                    <a href="/">
                        <img src={btnRepeat} id="btnRepeat" alt="Repeat" />
                    </a>
                </div> {/* End of footer */}
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);

