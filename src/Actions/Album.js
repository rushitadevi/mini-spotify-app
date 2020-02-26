//fetch playlist from category
export const fetchPlayListsByCategory = categoryId => {
  return async (dispatch, getState) => {
    try {
      //categoryId="pop"
      var res = await fetch(
        "https://api.spotify.com/v1/browse/categories/" +
          categoryId+ "/playlists",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );
      if (res.ok) {
        var response = await res.json();
        dispatch({
          type:"FETCH_PLAYLISTS",
          payload:{title: categoryId, items: response.playListsItems.items }
        })
        // if (categoryId === "mood") {
        //   dispatch({
        //     type: "FETCH_MOOD_PLAYLISTS",
        //   //  payload: response.playlists.items
        //    payload: {title: categoryId, items: response.playlists.items }
        //   });
        // } else if (categoryId === "pop") {
        //   console.log("inside")
        //   dispatch({
        //     type: "FETCH_POP_PLAYLISTS",
        //     payload: {title: categoryId, items: response.playlists.items }
        //     //payload: response.playlists.items
        //   });
        // }
      }
    } catch (err) {}
  };
};

//fetch tracks from playlist id
export const fetchTracksByPlayListId = playListId => {
  return async (dispatch, getState) => {
    try {
      var res = await fetch(
        "https://api.spotify.com/v1/playlists/" + playListId + "/tracks",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );
      if (res.ok) {
        var response = await res.json();
        dispatch({
          type: "FETCH_TRACKS_BY_PLAYLIST",
          payload: response.items
        });
      }
    } catch (err) {}
  };
};

//fetch all categories
export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      var res = await fetch("https://api.spotify.com/v1/browse/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      if (res.ok) {
        var response = await res.json();
        dispatch({
          type: "FETCH_CATEGORIES",
          payload: response.categories.items //getting response from API and setting it to payload
        });
      }
    } catch (err) {}
  };
};

//fetch playList from playlist id
export const fetchPlayListById = id => {
  return async (dispatch, getState) => {
    try {
      var res = await fetch("https://api.spotify.com/v1/playlists/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      if (res.ok) {
        var response = await res.json();
        dispatch({
          type: "FETCH_PLAYLIST_DATA",
          payload: response.playlists.items
        });
      }
    } catch (err) {}
  };
};
