export default function(state = {}, action) {
    switch (action.type) {
      case "FETCH_ALBUMS":
        return{
            ...state,
            payload: action.payload
          };         
      default:
        return state;
    }
  }