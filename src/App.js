import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();         
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user)=>{
        console.log(user);
      })
    }
  }, []);

  return (
    <div className="App">{token ? <Player/> : <Login />}</div>
  );
}

export default App;
