import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import albumReducers from "../Reducers/Album.js";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  playLists: {
    playListsItems: [],
    tracks: [],
    categories: [],
    playList: undefined,
    artists: [],
    loading: false
  }
};

const combReducer = combineReducers({
  playLists: albumReducers
});

export default function configureStore() {
  return createStore(
    combReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
