export default function(state = {}, action) {
  console.log(action.type)
  switch (action.type) {
    case "FETCH_PLAYLISTS":
      return {
        ...state,
        playListsItems: state.playListsItems.concat(action.payload)
      };
    case "FETCH_PLAYLIST_DATA":
      return {
        ...state,
        playList:action.payload
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
    case "FETCH_PLAYLIST_DATA1":
      return {
        ...state,
        moodPlayList: action.payload
      };
      case "FETCH_ARTISTS":
        return{
          ...state,
          artists:action.payload
        }
    default:
      return state;
  }
}
