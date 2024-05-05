import "./Login.css";
import spotifyImage from "../assets/spofity-image.jpg";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="container">
      <img src={spotifyImage} alt="spofity-background" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
