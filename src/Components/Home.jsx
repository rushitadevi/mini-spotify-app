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
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Artists from "./Artists";

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
                        <button id="btnSpotify">
                            <SpotifyLogin clientId={process.env.REACT_APP_CLIENT_ID}
                            redirectUri={'http://localhost:3000'}
                            onSuccess={this.onSuccess}
                            onFailure={this.onFailure}

                        >  </SpotifyLogin>Enjoy Music!!!!
                        </button>
                    </div>
                }

                <Provider store={configureStore()}>
                    <Router>
                        {/* <Route path="/" exact component={SignIn} /> */}
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
                </Provider>
            </>
        );
    }
}
export default Home;
