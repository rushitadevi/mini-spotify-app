import React from 'react';
import { connect } from "react-redux";
import { fetchArtists } from "../Actions/Album.js" //fetching from API 
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

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
        }
    }

    // componentDidUpdate  = () => {
    //   let searchArtist = this.state.arr
    // }
    componentDidMount = () => {
        this.props.fetchArtistsThunk();//fetching all artists
    }

    //textInput on change event
    onChange = (e) => {
        let artistArr = this.props.playLists.artists;
        //filtetring =>checking input typed by user exists in the array or not
        var newFilteredArray = artistArr.filter(item => (item.name.toLowerCase().includes(e.target.value.toLowerCase())))
        if (newFilteredArray.length > 0) {
            this.setState({
                arr: newFilteredArray,
            })
        }
        else {
            this.setState({
                arr: undefined,
            })
        }
    }

    render() {
        return (
            <>
                <div id="bodyCont">
                    <div id="bodyMainCont">
                        <div className="MainContainer" >
                            <Navbar />
                            <div className="Right">
                                <div className="insideContainer">
                                    <div className="searchText">
                                        <input type="text" className="inputText" onChange={(e) => this.onChange(e)}
                                        />
                                    </div> {/* End of searchText */}
                                </div>
                                <div className="otherContent">
                                    {this.state.arr && this.state.arr.length > 0 ?
                                        <>
                                            {this.state.arr.map((artist, id) => (
                                                <ul key={id} className="ulList">
                                                    <li >
                                                        <div key={id} className="card">
                                                            <div className="divImg" >
                                                                {artist.images[1] &&
                                                                    <img src={artist.images[1].url} alt="img" ></img>
                                                                }
                                                            </div> {/* End of divImg */}
                                                            <div className="card__content">
                                                                <Link to={"/tracks/" + artist.id} > <div className="card__title">{artist.name}</div></Link>
                                                                <p className="card__text"> {artist.description} </p>
                                                            </div> {/* End of card_content */}
                                                        </div> {/* End of card */}
                                                    </li> {/* End of li */}
                                                </ul>
                                            ))}
                                        </>
                                        :
                                        <>
                                            {this.props.playLists.artists && this.props.playLists.artists.map((artist, id) => (
                                                <ul key={id} className="ulList">
                                                    <li >
                                                        <div className="card">
                                                            <div className="divImg" >
                                                                {artist.images[1] &&
                                                                    <img src={artist.images[1].url} alt="img" ></img>
                                                                }
                                                            </div> {/* End of divImg */}
                                                            <div className="card__content">
                                                                <Link to={"/tracks/" + artist.id} > <div className="card__title">{artist.name}</div></Link>
                                                                <p className="card__text"> {artist.description} </p>
                                                            </div> {/* End of card-content */}
                                                        </div> {/* End of card */}
                                                    </li>{/* End of li */}
                                                </ul>
                                            ))
                                            }
                                        </>
                                    }
                                </div> {/* End of otherContent */}
                            </div> {/* End of Right */}
                        </div> {/* End of MainContainer */}
                    </div>{/* End of bodyMainCont */}
                    {/* <Footer/> */}
                    <div id="footCont">
                        <Footer />
                    </div>
                </div>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists);