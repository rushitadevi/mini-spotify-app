import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { fetchPlayListsByCategory } from "../Actions/Album.js" //fetcing data from API which is written in action
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    setLoading: () => //dispacting loading. as need to set loading false on page load
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
        this.props.setLoading(); //setting loading to false
        let categoryArray = ["mood", "pop", "focus", "sleep"];
        categoryArray.forEach((categoryId) => { //fetcing playlist by category
            this.props.fetchPlayListsByCategoryThunk(categoryId);
        })
    }
    render() {
        return (
            <>
                {/* main container  */}
                <div id="bodyCont">
                    <div id="bodyMainCont">
                        <div className="MainContainer">
                            <Navbar />
                            <div className="RightSideBar">
                                <div className="mainDisplay">
                                    {this.props.playLists.playListsItems && this.props.playLists.playListsItems.map((x, id) =>
                                        <div key={id} className="displayDiv">
                                            <div className="title" >{x.title.toUpperCase()}</div>
                                            <div id="displayCardsCol">
                                                {x.items.map((playList, id) =>
                                                    <div key={id} className="displayCards"> {/* start of displayCards */}
                                                        <div className="mainCard"> {/* card start */}
                                                            <div className="mainDivImg" >
                                                                <img src={playList.images[0].url} alt="img" ></img>
                                                            </div> {/* end of mainDivImg */}
                                                            <div id="contentCont">
                                                                <Link to={"/tracks/" + playList.id} > <div className="card__title">{playList.name}</div></Link>
                                                                <b><p className="card__text"> {playList.description} </p> </b>
                                                            </div>
                                                        </div> {/* end of maincard */}
                                                    </div>).slice(0, 3)
                                                }
                                            </div> {/* end of displayCardsCol */}
                                            <div className="seeAll">
                                                <Link to={"/displayPlaylist/" + x.title} >SEE ALL</Link>
                                            </div>
                                        </div>
                                    ).slice(0, 3)
                                    }
                                </div> {/* end of main display */}
                            </div> {/* end of Right side bar */}
                        </div> {/* end of main container */}                        
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
export default connect(mapStateToProps, mapDispatchToProps)(Main);