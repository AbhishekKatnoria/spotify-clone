import React from "react";
import "./Login.css";
import spotifyImage from "../assets/spofity-image.jpg";

function Login() {
  return (
    <div className="container">
      <img src={spotifyImage} alt="spofity-background"/>
      <a href="#">LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
