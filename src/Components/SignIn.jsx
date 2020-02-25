import React from 'react';
import SpotifyLogin from 'react-spotify-login';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom"
import Main from "../Components/Main"


const onSuccess = response => {
    console.log(response, response.access_token)
    localStorage["token"] = response.access_token
}

const onFailure = response => console.error(response);

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            success:false
         }
    }

    submit=()=>{
        console.log(this.state.success,"succ")
    }

    render() { 
        return ( 
            <div className="main">
                 <SpotifyLogin clientId={'05570e17449b40f7a0ac3d9ec33a4f6e'}
                    redirectUri={'http://localhost:3000'}
                    onSuccess={onSuccess}
                    onFailure={onFailure}                     
                    >Enjoy Music!!!</SpotifyLogin>
                {/* {onSuccess &&  } */}
            </div>
         );
}
}


export default SignIn;
