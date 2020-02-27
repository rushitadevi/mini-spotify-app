import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"; //for routing
import Main from "./Main"
import TracksByPlayList from "./TracksByPlayList";
import DisplayPlayList from "./DisplayPlayListByCategory"
import { Provider } from 'react-redux';
import configureStore from "../Store/Index.js";
import Category from "./Category";
import SpotifyLogin from 'react-spotify-login';
import '../StyleSheets/Home.css'
import { connect } from "react-redux";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
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

    onSuccess = response => {
        console.log(response, response.access_token)
        localStorage["token"] = response.access_token
        this.setState({
            success: true,
        })
    }

    onFailure = response => console.error(response);

    render() {
        return (
            <>
                {/* {this.state.isLoading === false &&
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                } */}
                {!this.state.success &&
                    <div className="home">
                        <div id="divbtnHome">
                            <button id="btnSpotify" onClick={() => this.props.setLoading()} >
                                <SpotifyLogin clientId={process.env.REACT_APP_CLIENT_ID}
                                    redirectUri={'http://localhost:3000'}
                                    onSuccess={this.onSuccess}
                                    onFailure={this.onFailure}
                                    id="btnSpotify"
                                >  Enjoy Music!!!!</SpotifyLogin>
                            </button>

                            <div id="divLoader">
                                {this.props.playLists.loading && (
                                    <Loader
                                        type="Oval"
                                        color="#00BFFF"
                                        height={100}
                                        width={100}
                                        timeout={20000}
                                        style={{ margin: "auto" }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                }

                <Router>
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
                {/* </Provider> */}
            </>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
