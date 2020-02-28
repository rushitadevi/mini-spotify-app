import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"; //for routing
import Main from "./Main"
import TracksByPlayList from "./TracksByPlayList";
import DisplayPlayList from "./DisplayPlayListByCategory"
import Category from "./Category";
import SpotifyLogin from 'react-spotify-login';
import '../StyleSheets/Home.css'
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'
import Artists from "./Artists";

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    setLoading: () =>
        dispatch({
            type: "LOADING",
        })
});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: undefined,
        }
    }
    //spotify login success
    onSuccess = response => {
        localStorage["token"] = response.access_token
        this.setState({
            success: true,
        })
    }

    onFailure = response => response;

    render() {
        return (
            <>
                {/* checking if spotify login fails or, to start the website */}
                {!this.state.success &&
                    <div className="home">
                        <div id="homeBtnSpotifyCont">
                            <div id="divbtnHome">
                                <div id="btnSpotify" onClick={() => this.props.setLoading()} >
                                    <SpotifyLogin clientId={process.env.REACT_APP_CLIENT_ID}
                                        redirectUri={'http://localhost:3000'}
                                        onSuccess={this.onSuccess}
                                        onFailure={this.onFailure}
                                        id="btnSpotify"
                                    >  Enjoy Music!!!!</SpotifyLogin>
                                </div>
                            </div>{/* end of divbtnHome */}
                            <div id="divLoader">
                                {/* setting loader by checking loader is true or not */}
                                {this.props.playLists.loading && (
                                    <Loader
                                        type="Oval"
                                        color="#00BFFF"
                                        height={70}
                                        width={70}
                                        timeout={20000}
                                        style={{ margin: "auto" }}
                                    />
                                )}
                            </div> {/* end of divLoader */}
                        </div>  {/* end of homeBtnSpotifyCont */}
                    </div>
                }

                <Router>
                    {/* if spotify login give successful response then it logs in */}
                    {this.state.success &&
                        <>                                            
                            <Route path="/" exact component={Main} />
                            <Route path="/tracks/:id" exact component={TracksByPlayList} />
                            <Route path="/displayPlayList/:categoryId" exact component={DisplayPlayList} />
                            <Route path="/categories/" exact component={Category} />
                            <Route path="/search/" exact component={Artists} />
                        </>
                    }
                </Router>
            </>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
