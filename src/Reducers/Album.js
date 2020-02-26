export default function(state = {}, action) {
  console.log(action.type,"ty  ")
  switch (action.type) {
    case "FETCH_PLAYLISTS":
      return{
        ...state,
        playListsItems:state.playLists.playListsItems.concat(action.payload)
      }
    case "FETCH_POP_PLAYLISTS":
      return {
        ...state,
        //popPlayList: state.popPlayList.concat(action.payload)
        playLists:state.playLists.concat(action.payload)
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
      case "FETCH_PLAYLIST_DATA" :
      return {
      ...state,
      moodPlayList:action.payload
      }
    default:
      return state;
  }
}
