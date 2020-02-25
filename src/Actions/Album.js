export const fetchPlayListsByCategory = (categoryId) => {
   return async (dispatch, getState) => {
    try {
             var res=await fetch("https://api.spotify.com/v1/browse/categories/"+ categoryId+"/playlists",{
               
                method: "GET",
                headers: {
                 "Content-Type": "application/json",
                 "Accept":"application/json",
                  "Authorization":
                    "Bearer " +
                    localStorage.getItem("token")
                 
                }
              });
             
              if (res.ok) {
                var response = await res.json();
                // console.log(response.playlists, "albums");
                if(categoryId==="mood")
                {
                  dispatch({
                    type: "FETCH_MOOD_PLAYLISTS",
                    payload: response.playlists.items
                   // payload: {name: categoryId, items: response.playlists.items }
                  });
                }                
                else if(categoryId==="pop")
                {
                  dispatch({
                    type: "FETCH_POP_PLAYLISTS",
                    payload: response.playlists.items
                  });
                }                
               }
            } catch (err) {
              // dispatch({
              //   type: "ERROR",
              //   payload: err
              // });
            }
          };
};

export const fetchTracksByPlayListId=(playListId)=>{
  return async(dispatch,getState)=>{
    try {
      var res=await fetch("https://api.spotify.com/v1/playlists/"+ playListId +"/tracks",{
         method: "GET",
         headers: {
          "Content-Type": "application/json",
          "Accept":"application/json",
           "Authorization":
             "Bearer " +
             localStorage.getItem("token")
            }
       });
 
       if (res.ok) {
         var response = await res.json();
       
           dispatch({
             type: "FETCH_TRACKS_BY_PLAYLIST",
             payload: response.items
           });
                      
       }
     } catch (err) {
       // dispatch({
       //   type: "ERROR",
       //   payload: err
       // });
     
   };
  }
}

export const fetchCategories=()=>{
  return async(dispatch,getState)=>{
    try {
      var res=await fetch("https://api.spotify.com/v1/browse/categories",{
         method: "GET",
         headers: {
          "Content-Type": "application/json",
          "Accept":"application/json",
           "Authorization":
             "Bearer " +
             localStorage.getItem("token") }
       });
 
       if (res.ok) {
         var response = await res.json();
       
           dispatch({
             type: "FETCH_CATEGORIES",
             payload: response.categories.items
           });
                      
       }
     } catch (err) {
       // dispatch({
       //   type: "ERROR",
       //   payload: err
       // });
     
   };
  }
}