import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../src/StyleSheets/Main.css";
import "../src/StyleSheets/PlayList.css";
import "../src/StyleSheets/Category.css";
import "../src/StyleSheets/DisplayPLayListByCategory.css";
import "../src/StyleSheets/SignIn.css";
import "../src/StyleSheets/TracksByPlayList.css";
// import '../src/StyleSheets/Home.css'
import Home from "./Components/Home";
import { Provider } from 'react-redux';
import configureStore from "./Store/Index.js";
//import PlayList from "./Components/PlayList"
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Home />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
