export default function(state = {}, action) {
 
  switch (action.type) {
    case "FETCH_POP_PLAYLISTS":
      return {
        ...state,
        popPlayList:state.popPlayList.concat(action.payload)
      };
    case "FETCH_MOOD_PLAYLISTS":
      return {
        ...state,
        moodPlayList: state.moodPlayList.concat(action.payload)
      };
    case "FETCH_DECADES_PLAYLISTS":
      return {
        ...state,
        decadesPlayList: state.decadesPlayList.concat(action.payload)
      };
    case "FETCH_TRACKS_BY_PLAYLIST":
      return {
        tracks: action.payload
      };
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
}
