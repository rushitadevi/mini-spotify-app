import React,{Component} from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"; //for routing
import Main from "./Main"
import PlayList from "./PlayList";
import { Provider } from 'react-redux';
import configureStore from "../Store/Index.js";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Provider store={configureStore()}>
            <Router>
                 <Route path="/" exact component={Main} />
                 <Route path="/album" exact component={PlayList} />
            </Router>
            </Provider>
         );
    }
}
 
export default Home;
