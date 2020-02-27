import React from 'react';
import { connect } from "react-redux";
import { fetchArtists } from "../Actions/Album.js"
import '../StyleSheets/Artists.css'
import { Link } from "react-router-dom"
import spotifyLogo from "../logo/Spotify_Logo.png"
import btnNext from "../PlayerButtons/Next.png"
import btnPrevious from "../PlayerButtons/Previous.png"
import btnRepeat from "../PlayerButtons/Repeat.png"
import btnShuffle from "../PlayerButtons/Shuffle.png"
import btnPlay from "../PlayerButtons/Play.png"
import Loader from 'react-loader-spinner'

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    fetchArtistsThunk: () => dispatch(fetchArtists())
});

class Artists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: undefined,
            isLoading: false,
            notFound: undefined
        }
    }

    componentDidMount = () => {
        this.props.fetchArtistsThunk();
    }

    onChange = (e) => {
        let artistArr = this.props.playLists.artists;
        var newFilteredArray = artistArr.filter(item => (item.name.toLowerCase().includes(e.target.value.toLowerCase())))
        // this.setState({
        //     isLoading: true
        // })
        if (newFilteredArray.length > 0) {
            this.setState({
                arr: newFilteredArray,
                // isLoading:false,
                // notFound:"found"
            })
        }
        else {
            this.setState({
                arr: undefined,
                //  isLoading: false,
                //  notFound:"not found"
            })
        }
    }

    render() {
        // console.log(this.state.notFound, "loading")

        return (
            <>
                <div className="MainContainer" >
                    <div className="sideBar">
                        <img src={spotifyLogo} id="imgLogo" alt="noImg" ></img>
                        <ul className="ulList" >
                            <Link to={"/"} ><a className="li" href="/" >Home</a></Link>
                            <Link to={"/search"} ><a className="li" href="/search" >Search</a></Link>
                            <Link to={"/categories/"}><a className="li" href="/categories/">Categories</a></Link>
                            <Link to={"/"}><a className="li">Log Out</a></Link>
                        </ul>
                    </div>
                    <div className="Right">
                        <div className="insideContainer">
                            <div className="searchText">
                                <input type="text" className="inputText" onChange={(e) => this.onChange(e)}
                                />
                            </div>
                        </div>
                        <div className="otherContent">
                            {/* <div className="content" > */}
                                {this.state.isLoading ? <Loader
                                    type="Puff"
                                    color="#00BFFF"
                                    height={100}
                                    width={100}
                                // timeout={3000}
                                /> :
                                <>
                                    {this.state.arr && this.state.arr.length > 0 ?
                                        <>
                                            {this.state.arr.map((artist, id) => (
                                                <ul className="cards" key={id} >
                                                    <li className="cards__item">
                                                        <div className="card">
                                                            <div className="card__image card__image--fence" >
                                                                <img src={artist.images[1].url} alt="img" ></img>
                                                            </div>
                                                            <div className="card__content">
                                                                <Link to={"/tracks/" + artist.id} > <div className="card__title">{artist.name}</div></Link>
                                                                <p className="card__text"> {artist.description} </p>
                                                                {/* <button className="btn btn--block card__btn">Button</button> */}
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            ))}
                                        </>
                                        :
                                        <>
                                            {this.props.playLists.artists && this.props.playLists.artists.map((artist, id) => (
                                                <ul className="cards" key={id}>
                                                    <li className="cards__item">
                                                        <div className="card">
                                                            <div className="card__image card__image--fence" >
                                                                <img src={artist.images[1].url} alt="img" ></img>
                                                            </div>
                                                            <div className="card__content">
                                                                <Link to={"/tracks/" + artist.id} > <div className="card__title">{artist.name}</div></Link>
                                                                <p className="card__text"> {artist.description} </p>
                                                                {/* <button className="btn btn--block card__btn">Button</button> */}
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            ))
                                            }
                                        </>
                                    }
                                  </>  
                                }
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <a href="/">
                        <img src={btnShuffle} id="btnNext" alt="shuffle" />
                    </a>
                    <a href="/">
                        <img src={btnPrevious} id="btnPrevious" alt="Previous" />
                    </a>
                    <a href="/">
                        <img src={btnPlay} id="btnPlay" alt="Play" />
                    </a>
                    <a href="/">
                        <img src={btnNext} id="btnShuffle" alt="Next" />
                    </a>
                    <a href="/">
                        <img src={btnRepeat} id="btnRepeat" alt="Repeat" />
                    </a>
                </div>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists);