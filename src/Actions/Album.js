export const fetchAlbums = () => {
  //console.log("inside action");
  return async (dispatch, getState) => {
    try {
              var res = await fetch("https://api.spotify.com/v1/albums", {
                method: "GET",
                // body: JSON.stringify(data),
                headers: {
                  // "Content-Type": "application/json",
                  "X-RapidAPI-Host": "https://api.spotify.com",
                 "X-RapidAPI-Key": "57493545d4c44d5e829806456f5e2584",
                  Authorization:
                    "Bearer " +
                    "BQAGF2pcL2-ICnwgrXkkz2QlbUb87aV2OCV7M2BmFt7RuAjoQYTyyUO07lS12wHBah"
                }
              });
        console.log(res,"res")
              if (res.ok) {
                var albums = await res.json();
                console.log(albums, "albums");
                dispatch({
                  type: "FETCH_ALBUMS",
                  payload: albums
                });
              }
            } catch (err) {
              // dispatch({
              //   type: "ERROR",
              //   payload: err
              // });
            }
          };
};
//   return async (dispatch, getState) => {
//     try {
//       var res = await fetch("https://api.spotify.com/v1/albums", {
//         method: "GET",
//         // body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer " +
//             "BQDSMeXn6gpFKba1nZVp4WZqTTliaglnBBLR8MJdwzzxhoNyr_9MOXCoZyjwnUiCse0jy8qaFPhBcuPWrx9yp3N4awxk-pFc9t0I3XphVNY70YGHnELjKfzLPsQhUyuN2HOsxSP0V6TPtVhVFwjxXauw8mJnLSw"
//         }
//       });

//       if (res.ok) {
//         var albums = await res.json();
//         console.log(albums, "albums");
//         dispatch({
//           type: "FETCH_ALBUMS",
//           payload: albums
//         });
//       }
//     } catch (err) {
//       // dispatch({
//       //   type: "ERROR",
//       //   payload: err
//       // });
//     }
//   };
// };
