import React,{Component} from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"; //for routing
import Main from "./Main"
import TracksByPlayList from "./TracksByPlayList";
import DisplayPlayList from "./DisplayPlayListByCategory"
import { Provider } from 'react-redux';
import configureStore from "../Store/Index.js";
import Category from "./Category";
import SignIn from "./SignIn";
import SpotifyLogin from 'react-spotify-login';





class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            success:undefined
         }
    }

     onSuccess = response => {
        console.log(response, response.access_token)
        localStorage["token"] = response.access_token
        this.setState({
            success:true
        })
    }

     onFailure = response => console.error(response);

    render() { 
        return ( 
            <>
            
            {!this.state.success &&
            <SpotifyLogin clientId={'05570e17449b40f7a0ac3d9ec33a4f6e'}
               redirectUri={'http://localhost:3000'}
               onSuccess={this.onSuccess}
               onFailure={this.onFailure}                     
               >Enjoy Music!!!!</SpotifyLogin>
    }
             
            <Provider store={configureStore()}>
            <Router>
                 {/* <Route path="/" exact component={SignIn} /> */}
                 {this.state.success &&    
                 <Route path="/" exact component={Main} />
                 }
                 <Route path="/tracks/:id" exact component={TracksByPlayList} />
                 <Route path="/displayPlayList/:categoryId" exact component={DisplayPlayList}/>
                 <Route path="/categories/" exact component={Category}/>
                 
               
            </Router>
            </Provider>
     
        </>
         );
    }
}
 
export default Home;
