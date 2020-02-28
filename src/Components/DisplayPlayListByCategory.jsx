import React from 'react';
import { fetchPlayListsByCategory } from "../Actions/Album.js"
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

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
                <div id="bodyCont">
                    <div id="bodyMainCont">
                        <div className="container">{/*  container */}
                            <Navbar />
                            <div className="RightSidBar">
                                <div className="MainContent">
                                    {this.state.filteredArr && this.state.filteredArr.map((x, id) =>
                                        <div key={id} className="displayDivCategory" >
                                            {x.items.map((playList, id) =>
                                                <div key={id} className="displayCards">
                                                    <ul className="ulList">
                                                        <li>
                                                            <div className="card">
                                                                <div className="divImg" >
                                                                    <img src={playList.images[0].url} alt="img" ></img>
                                                                </div> {/* end of divImg */}
                                                                <Link to={"/tracks/" + playList.id} > <div className="card__title">{playList.name}</div></Link>
                                                                <b><p className="card__text"> {playList.description} </p> </b>
                                                            </div> {/* end of card */}
                                                        </li>
                                                    </ul> {/* end of ul */}
                                                </div>)}
                                        </div>
                                    )
                                    }
                                </div> {/* end of MainContent */}
                            </div> {/* enf of RightSideBar */}
                        </div> {/* end of container */}
                    </div> {/* end of bodyMainCont */}
                    {/* <Footer/> */}
                    <div id="footCont">
                        <Footer />
                    </div>
                </div>{/* end of bodyCont */}
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPlayList);